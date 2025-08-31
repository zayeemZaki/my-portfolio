import React, { useState, useEffect } from 'react';
import './GitHubStats.css';

const GitHubStats = () => {
    const [stats, setStats] = useState({
        repos: 0,
        followers: 0,
        following: 0,
        totalStars: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGitHubStats();
    }, []);

    const fetchGitHubStats = async () => {
        try {
            // Replace 'zayeemZaki' with your actual GitHub username
            const userResponse = await fetch('https://api.github.com/users/zayeemZaki');
            const userData = await userResponse.json();
            
            const reposResponse = await fetch('https://api.github.com/users/zayeemZaki/repos');
            const reposData = await reposResponse.json();
            
            const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
            
            setStats({
                repos: userData.public_repos,
                followers: userData.followers,
                following: userData.following,
                totalStars: totalStars
            });
            setLoading(false);
                } catch (error) {
            // Handle error silently for production
        } finally {
            setLoading(false);
        }
    };

    const statItems = [
        { label: 'Public Repos', value: stats.repos, icon: '📁' },
        { label: 'Followers', value: stats.followers, icon: '👥' },
        { label: 'Following', value: stats.following, icon: '➡️' },
        { label: 'Total Stars', value: stats.totalStars, icon: '⭐' }
    ];

    return (
        <div className="github-stats-section">
            <div className="heading-container">
                <div className="line"></div>
                <h2 className="github-stats-heading">GitHub Activity</h2>
                <div className="line"></div>
            </div>
            
            <div className="github-stats-container" data-aos="fade-up">
                <div className="stats-grid">
                    {statItems.map((item, index) => (
                        <div key={index} className="stat-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                            <div className="stat-icon">{item.icon}</div>
                            <div className="stat-value">
                                {loading ? '...' : item.value}
                            </div>
                            <div className="stat-label">{item.label}</div>
                        </div>
                    ))}
                </div>
                
                <div className="github-chart-container" data-aos="fade-left">
                    <h3>Contribution Graph</h3>
                    <img 
                        src="https://github-readme-streak-stats.herokuapp.com/?user=zayeemZaki&theme=dark&hide_border=true"
                        alt="GitHub Streak Stats"
                        className="github-chart"
                    />
                    <img 
                        src="https://github-readme-stats.vercel.app/api?username=zayeemZaki&show_icons=true&theme=dark&hide_border=true&include_all_commits=true"
                        alt="GitHub Stats"
                        className="github-chart"
                    />
                </div>
            </div>
            
            {/* Smooth transition to next section */}
            <div className="section-transition">
                <div className="wave-container">
                    <svg className="wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="m0,6C0,6,347.333,18,505.333,18C663.333,18,1200,6,1200,6L1200,120L0,120z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GitHubStats;
