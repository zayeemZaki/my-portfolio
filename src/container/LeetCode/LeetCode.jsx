import React, { useState, useEffect, useCallback } from 'react';
import './LeetCode.css';

const LeetCode = () => {
  const [stats, setStats] = useState({
    totalSolved: 369, // Use real data as default
    easy: 171,
    medium: 180,
    hard: 18,
    maxStreak: 97,
    loading: false,
    error: false
  });

  const [selectedBadge, setSelectedBadge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [badges] = useState([
    { id: '6501397', name: '365 Days Badge', icon: 'https://assets.leetcode.com/static_assets/marketing/lg365.png', creationDate: '2025-03-11' },
    { id: '7743401', name: '100 Days Badge 2025', icon: 'https://assets.leetcode.com/static_assets/others/lg25100.png', creationDate: '2025-08-04' },
    { id: '6357115', name: '50 Days Badge 2025', icon: 'https://assets.leetcode.com/static_assets/others/lg2550.png', creationDate: '2025-03-01' },
    { id: '5162508', name: '200 Days Badge 2024', icon: 'https://assets.leetcode.com/static_assets/marketing/2024-200-lg.png', creationDate: '2024-10-15' },
    { id: '4238356', name: '100 Days Badge 2024', icon: 'https://assets.leetcode.com/static_assets/marketing/2024-100-lg.png', creationDate: '2024-07-01' },
    { id: '3899766', name: '50 Days Badge 2024', icon: 'https://assets.leetcode.com/static_assets/marketing/2024-50-lg.png', creationDate: '2024-05-11' },
    { id: '4615628', name: 'Jul LeetCoding Challenge', icon: 'https://leetcode.com/static/images/badges/dcc-2024-7.png', creationDate: '2024-07-31' },
    { id: '4204397', name: 'Jun LeetCoding Challenge', icon: 'https://leetcode.com/static/images/badges/dcc-2024-6.png', creationDate: '2024-06-30' },
    { id: '5303415', name: 'LeetCode 75', icon: 'https://assets.leetcode.com/static_assets/others/LeetCode_75.png', creationDate: '2024-10-28' }
  ]); // All 9 real badges

  const openBadgeModal = (badge) => {
    setSelectedBadge(badge);
    setIsModalOpen(true);
  };

  const closeBadgeModal = () => {
    setSelectedBadge(null);
    setIsModalOpen(false);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeBadgeModal();
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeBadgeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto'; // Use auto instead of unset
    };
  }, [isModalOpen]);

  const loadLeetCodeData = useCallback(async () => {
    
    setStats(prevStats => ({
      ...prevStats,
      loading: false,
      error: false
    }));
  }, []);

  useEffect(() => {
    loadLeetCodeData();
  }, [loadLeetCodeData]);

  return (
    <>
      <section id="leetcode" className="leetcode-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">
              <span className="title-icon">⚡</span>
              LeetCode Journey
              <span className="title-accent">.</span>
            </h2>
            <p className="section-subtitle">
              Algorithmic problem-solving achievements
            </p>
          </div>

          <div className="leetcode-content">
            {/* Main Stats Overview - Horizontal Layout */}
            <div className="main-stats-container" data-aos="fade-up" data-aos-delay="100">
              <div className="primary-stat">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <div className="stat-number">{stats.totalSolved}</div>
                  <div className="stat-label">Problems Solved
                    {stats.error && <span className="error-indicator"> (Offline)</span>}
                  </div>
                </div>
              </div>
              
              <div className="stats-breakdown">
                <div className="breakdown-item easy">
                  <div className="breakdown-number">{stats.easy}</div>
                  <div className="breakdown-label">Easy</div>
                </div>
                <div className="breakdown-item medium">
                  <div className="breakdown-number">{stats.medium}</div>
                  <div className="breakdown-label">Medium</div>
                </div>
                <div className="breakdown-item hard">
                  <div className="breakdown-number">{stats.hard}</div>
                  <div className="breakdown-label">Hard</div>
                </div>
              </div>
              
              <div className="streak-stat">
                <div className="stat-icon">📈</div>
                <div className="stat-content">
                  <div className="stat-number">{stats.maxStreak}</div>
                  <div className="stat-label">Max Streak</div>
                </div>
              </div>
            </div>

            {/* Compact Badges Section */}
            <div className="badges-section" data-aos="fade-up" data-aos-delay="200">
              <h3 className="subsection-title">
                <span className="subsection-icon">🏅</span>
                Badges & Achievements ({badges.length})
              </h3>
              <div className="badges-compact-grid">
                {badges.length > 0 ? (
                  badges.map((badge, index) => (
                    <div 
                      key={badge.id || index} 
                      className="badge-card-compact"
                      onClick={() => openBadgeModal(badge)}
                    >
                      <div className="badge-icon-compact">
                        {badge.icon && badge.icon.startsWith('http') ? (
                          <img src={badge.icon} alt={badge.name} className="badge-image-compact" />
                        ) : badge.icon ? (
                          <span className="badge-emoji-compact">{badge.icon}</span>
                        ) : (
                          <span className="badge-emoji-compact">🏆</span>
                        )}
                      </div>
                      <div className="badge-content-compact">
                        <h4 className="badge-title-compact">{badge.name}</h4>
                        {badge.creationDate && (
                          <p className="badge-date-compact">
                            {new Date(badge.creationDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-badges">
                    <p>Loading badges...</p>
                  </div>
                )}
              </div>
            </div>

            {/* LeetCode Profile Link */}
            <div className="leetcode-cta" data-aos="fade-up" data-aos-delay="300">
              <div className="cta-content">
                <h3>Visit My LeetCode Profile</h3>
                <p>Check out my complete problem-solving journey and progress</p>
                <a 
                  href="https://leetcode.com/u/zayeem_zaki/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="leetcode-btn"
                >
                  <span>🚀</span>
                  View Profile
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Modal */}
      {isModalOpen && selectedBadge && (
        <div className="badge-modal-overlay" onClick={handleModalBackdropClick}>
          <div className="badge-modal">
            <button className="modal-close-btn" onClick={closeBadgeModal}>
              ×
            </button>
            <div className="modal-content">
              <div className="modal-badge-icon">
                {selectedBadge.icon && selectedBadge.icon.startsWith('http') ? (
                  <img src={selectedBadge.icon} alt={selectedBadge.name} className="modal-badge-image" />
                ) : selectedBadge.icon ? (
                  <span className="modal-badge-emoji">{selectedBadge.icon}</span>
                ) : (
                  <span className="modal-badge-emoji">🏆</span>
                )}
              </div>
              <div className="modal-badge-details">
                <h3 className="modal-badge-title">{selectedBadge.name}</h3>
                {selectedBadge.creationDate && (
                  <p className="modal-badge-date">
                    Earned on: {new Date(selectedBadge.creationDate).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                )}
                <div className="modal-actions">
                  <a 
                    href="https://leetcode.com/u/zayeem_zaki/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-leetcode-btn"
                  >
                    <span>🔗</span>
                    View on LeetCode
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeetCode;
