import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch("https://api.github.com/users/ShreshthTarwey", { next: { revalidate: 3600 } }),
      fetch("https://api.github.com/users/ShreshthTarwey/repos?per_page=100", { next: { revalidate: 3600 } }),
      fetch("https://github-contributions-api.jogruber.de/v4/ShreshthTarwey?y=last", { next: { revalidate: 3600 } }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();
    const contribData = contribRes.ok ? await contribRes.json() : null;

    const totalContributions: number = contribData?.total?.lastYear ?? contribData?.total ?? 0;

    // Count languages
    const langs: Record<string, number> = {};
    if (Array.isArray(repos)) {
      repos.forEach((r: { language: string | null }) => {
        if (r.language) langs[r.language] = (langs[r.language] || 0) + 1;
      });
    }

    return NextResponse.json({
      publicRepos: user.public_repos ?? 32,
      followers: user.followers ?? 2,
      following: user.following ?? 1,
      totalContributions,
      topLangs: Object.entries(langs)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([lang, count]) => ({ lang, count })),
      joinedYear: new Date(user.created_at).getFullYear(),
    });
  } catch {
    return NextResponse.json({
      publicRepos: 32,
      followers: 2,
      following: 1,
      totalContributions: 803,
      topLangs: [
        { lang: "TypeScript", count: 5 },
        { lang: "JavaScript", count: 8 },
        { lang: "C++", count: 6 },
        { lang: "Python", count: 4 },
      ],
      joinedYear: 2023,
    });
  }
}
