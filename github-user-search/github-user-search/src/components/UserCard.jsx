// src/components/UserCard.jsx
function UserCard({ username, avatarUrl, profileUrl }) {
    return (
      <div className="user-card">
        <img src={avatarUrl} alt={`${username} avatar`} className="user-avatar" />
        <div className="user-info">
          <h3>{username}</h3>
          <a href={profileUrl} target="_blank" rel="noreferrer">
            View GitHub Profile
          </a>
        </div>
      </div>
    );
}
export default UserCard; 
  