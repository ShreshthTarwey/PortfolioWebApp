import { NextResponse } from "next/server";

const LEETCODE_GRAPHQL = "https://leetcode.com/graphql";
const USERNAME = "Shreshth_Tarwey";

const QUERY = `
query getUserProfile($username: String!) {
  matchedUser(username: $username) {
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }
    profile {
      ranking
    }
  }
  userContestRanking(username: $username) {
    rating
    globalRanking
    attendedContestsCount
    topPercentage
  }
}
`;

export async function GET() {
  try {
    const res = await fetch(LEETCODE_GRAPHQL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({ query: QUERY, variables: { username: USERNAME } }),
      next: { revalidate: 1800 },
    });

    if (!res.ok) throw new Error(`GraphQL request failed: ${res.status}`);

    const json = await res.json();
    const user = json?.data?.matchedUser;
    const contest = json?.data?.userContestRanking;
    if (!user) throw new Error("User not found in response");

    const stats: { difficulty: string; count: number }[] =
      user.submitStatsGlobal?.acSubmissionNum ?? [];

    const getAc = (diff: string) =>
      stats.find((s) => s.difficulty === diff)?.count ?? 0;

    // const totalSolved = getAc("All");
    // const easySolved = getAc("Easy");
    // const mediumSolved = getAc("Medium");
    // const hardSolved = getAc("Hard");
    // const ranking = user.profile?.ranking ?? 0;
    // const contestRating = Math.round(contest?.rating ?? 0);
    // const topPercentage = contest?.topPercentage ?? 0;

        // const totalSolved = getAc("All");
    const totalSolved = 200;
    // const easySolved = getAc("Easy");
    const easySolved = 45;
    // const mediumSolved = getAc("Medium");
    const mediumSolved = 140;
    // const hardSolved = getAc("Hard");
    const hardSolved = 15;
    // const ranking = user.profile?.ranking ?? 0;
    const ranking = 400000;
    // const contestRating = Math.round(contest?.rating ?? 0);
    const contestRating = 1596;
    // const topPercentage = contest?.topPercentage ?? 0;
    const topPercentage = 20.56;

    return NextResponse.json({
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      contestRating,
      topPercentage,
      ranking,
    });
  } catch (err) {
    console.error("LeetCode API error:", err);
    return NextResponse.json({
      totalSolved: 336,
      easySolved: 97,
      mediumSolved: 202,
      hardSolved: 37,
      contestRating: 1759,
      topPercentage: 9.56,
      ranking: 372994,
    });
  }
}
