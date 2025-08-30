// LeetCode API service to fetch real-time data
export const fetchLeetCodeData = async (username = 'zayeem_zaki') => {
  try {
    // LeetCode GraphQL endpoint
    const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql/';
    
    // GraphQL query to get comprehensive user profile data
    const query = `
      query getUserProfile($username: String!) {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: $username) {
          username
          profile {
            realName
            ranking
            userAvatar
            reputation
            starRating
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
            totalSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          badges {
            id
            displayName
            icon
            creationDate
          }
          userCalendar {
            activeYears
            streak
            totalActiveDays
            dccBadges {
              timestamp
              badge {
                name
                icon
              }
            }
            submissionCalendar
          }
        }
        recentSubmissionList(username: $username, limit: 10) {
          title
          titleSlug
          timestamp
          statusDisplay
          lang
          url
          isPending
          memory
          runtime
          __typename
        }
        userContestRanking(username: $username) {
          attendedContestsCount
          rating
          globalRanking
          totalParticipants
          topPercentage
          badge {
            name
          }
        }
      }
    `;

    const response = await fetch(LEETCODE_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      },
      body: JSON.stringify({
        query,
        variables: { username }
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.warn('GraphQL errors:', data.errors);
      throw new Error('GraphQL errors: ' + JSON.stringify(data.errors));
    }

    return data.data;
  } catch (error) {
    console.error('Error fetching LeetCode GraphQL data:', error);
    throw error;
  }
};

// Enhanced LeetCode Stats API with multiple endpoints
export const fetchLeetCodeStatsAPI = async (username = 'zayeem_zaki') => {
  const endpoints = [
    `https://leetcode-stats-api.herokuapp.com/${username}`,
    `https://alfa-leetcode-api.onrender.com/${username}/solved`,
    `https://alfa-leetcode-api.onrender.com/userProfile/${username}`
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Check if data is valid and contains expected fields
      if (data && (data.totalSolved !== undefined || data.solvedProblem !== undefined)) {
        // Normalize the data structure
        return {
          status: 'success',
          totalSolved: data.totalSolved || data.solvedProblem || 0,
          easySolved: data.easySolved || data.easySolved || 0,
          mediumSolved: data.mediumSolved || data.mediumSolved || 0,
          hardSolved: data.hardSolved || data.hardSolved || 0,
          ranking: data.ranking || data.contributionPoints || 0,
          acceptanceRate: data.acceptanceRate || 0,
          totalQuestions: data.totalQuestions || 0,
          contributionPoints: data.contributionPoints || 0,
          reputation: data.reputation || 0,
          endpoint: endpoint
        };
      }
    } catch (error) {
      console.warn(`Failed to fetch from ${endpoint}:`, error);
      continue;
    }
  }
  
  return null;
};

// New function to get LeetCode contest data
export const fetchLeetCodeContest = async (username = 'zayeem_zaki') => {
  try {
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/userContest/${username}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Failed to fetch contest data:', error);
  }
  return null;
};

// Function to get difficulty color
export const getDifficultyColor = (difficulty) => {
  switch (difficulty?.toLowerCase()) {
    case 'easy': return '#00b894';
    case 'medium': return '#fdcb6e';
    case 'hard': return '#e84393';
    default: return '#6c5ce7';
  }
};

// Format timestamp to readable date
export const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Helper function to extract key LeetCode metrics
export const extractKeyMetrics = (data) => {
  if (!data || !data.matchedUser) {
    return {
      stats: null,
      badges: [],
      maxStreak: 0
    };
  }

  const user = data.matchedUser;
  
  // Extract problem solving stats
  let stats = null;
  if (user.submitStats && user.submitStats.acSubmissionNum) {
    const submitStats = user.submitStats.acSubmissionNum;
    const totalData = submitStats.find(stat => stat.difficulty === 'All');
    const easyData = submitStats.find(stat => stat.difficulty === 'Easy');
    const mediumData = submitStats.find(stat => stat.difficulty === 'Medium');
    const hardData = submitStats.find(stat => stat.difficulty === 'Hard');
    
    stats = {
      totalSolved: totalData?.count || 0,
      easy: easyData?.count || 0,
      medium: mediumData?.count || 0,
      hard: hardData?.count || 0
    };
  }

  // Extract badges
  const badges = user.badges ? user.badges.map(badge => ({
    id: badge.id,
    name: badge.displayName,
    icon: badge.icon,
    creationDate: badge.creationDate
  })) : [];

  // Extract max streak
  const maxStreak = user.userCalendar ? user.userCalendar.streak || 0 : 0;

  return {
    stats,
    badges,
    maxStreak
  };
};
