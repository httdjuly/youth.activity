import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../style/forum.css';

const Response = ({ username, responseTime, content }) => {
  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '10px', marginTop: '10px' }}>
      <div>
        <span style={{ fontWeight: 'bold' }}>{username}</span> ({responseTime}): {content}
      </div>
    </div>
  );
};

function ForumActivityTab() {
  const [responseInput, setResponseInput] = useState('');
  let { id } = useParams();

  const [forumData, setForumData] = useState({
    id: '',
    threads: [],
  });

  useEffect(() => {
    fetch('/forum.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedForum = data.find((forum) => forum.id === parseInt(id));
        if (selectedForum) {
          setForumData(selectedForum);
        } else {
          console.error(`Forum with ID ${id} not found.`);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  const handleResponseChange = (e) => {
    setResponseInput(e.target.value);
  };

  const handleResponseSubmit = (threadID) => {
    // Xử lý submit response ở đây
    console.log(`Thread ID ${threadID}, Response: ${responseInput}`);
  };

  return (
    <div className="row actcontent thislayout">
      <button type="button" className="btn btn-light buttonresg">
        Tạo thảo luận
      </button>
      <div className="forumlayout">
        {forumData.threads.map((t, index) => (
          <div key={index} className="topic">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>
                <img
                  src={`avatar_${t.username}.png`}
                  alt={`${t.username} avatar`}
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
              </div>
              <div style={{ fontWeight: t.role === 'host' ? 'bold' : 'normal' }}>
                {t.username} {t.role === 'host' && <span style={{ color: 'red' }}>🔔</span>}
              </div>
            </div>
            <div style={{ marginTop: '5px', marginBottom: '10px', fontWeight: 'bold', color: t.role === 'host' ? 'red' : 'black' }}>
              {t.title}
            </div>
            <div>{t.content}</div>
            {t.role === 'attendance' ? (
              t.response ? (
                <Response username={t.response.username} responseTime={t.response.responseTime} content={t.response.content} />
              ) : (
                <div style={{ marginTop: '10px' }}>
                  <input type="text" value={responseInput} onChange={handleResponseChange} placeholder="Nhập câu trả lời..." />
                  <button onClick={() => handleResponseSubmit(t.threadID)}>Trả lời</button>
                </div>
              )
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumActivityTab;
