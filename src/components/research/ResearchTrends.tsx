
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, ExternalLink, Lightbulb } from "lucide-react";

export function ResearchTrends() {
  const [searchQuery, setSearchQuery] = useState('');

  const trendingTopics = [
    {
      keyword: "AI automation",
      growth: "+245%",
      volume: "125K searches/month",
      difficulty: "Medium",
      category: "Technology",
    },
    {
      keyword: "Sustainable business",
      growth: "+189%",
      volume: "89K searches/month",
      difficulty: "Low",
      category: "Business",
    },
    {
      keyword: "Remote work tools",
      growth: "+156%",
      volume: "234K searches/month",
      difficulty: "High",
      category: "Productivity",
    },
    {
      keyword: "Digital marketing trends",
      growth: "+134%",
      volume: "167K searches/month",
      difficulty: "Medium",
      category: "Marketing",
    },
  ];

  const contentIdeas = [
    {
      title: "10 AI Tools That Will Transform Your Business in 2024",
      type: "Educational Post",
      platform: "LinkedIn",
      estimatedReach: "2.5K - 5K",
      engagement: "High",
    },
    {
      title: "Behind the Scenes: Our Sustainable Office Setup",
      type: "Behind-the-Scenes",
      platform: "Instagram",
      estimatedReach: "1.2K - 3K",
      engagement: "Medium",
    },
    {
      title: "Remote Work Productivity Hacks Thread",
      type: "Thread",
      platform: "Twitter",
      estimatedReach: "800 - 2K",
      engagement: "High",
    },
  ];

  const competitorInsights = [
    {
      competitor: "TechCorp Solutions",
      engagement: "3.2%",
      followers: "45K",
      topContent: "AI automation guides",
      trend: "up",
    },
    {
      competitor: "Digital Innovators",
      engagement: "2.8%",
      followers: "32K",
      topContent: "Industry insights",
      trend: "stable",
    },
    {
      competitor: "Future Business Co",
      engagement: "4.1%",
      followers: "28K",
      topContent: "Behind-the-scenes content",
      trend: "up",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Research & Trends</h1>
          <p className="text-slate-600 mt-2">Discover trending topics and content opportunities</p>
        </div>
      </div>

      {/* Search Section */}
      <Card className="border-0 shadow-sm bg-white">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search for trends, keywords, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 border-slate-200 focus:border-blue-500"
              />
            </div>
            <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
              Search Trends
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trending Topics */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Trending Topics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="p-4 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-900">{topic.keyword}</h3>
                    <span className="text-green-600 font-medium text-sm">{topic.growth}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500">Search Volume</p>
                      <p className="font-medium text-slate-900">{topic.volume}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Difficulty</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        topic.difficulty === 'Low' ? 'bg-green-100 text-green-700' :
                        topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {topic.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {topic.category}
                    </span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Explore
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Competitor Insights */}
        <div>
          <Card className="border-0 shadow-sm bg-white mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Competitor Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {competitorInsights.map((competitor, index) => (
                <div key={index} className="p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900 text-sm">{competitor.competitor}</h4>
                    <span className={`text-xs ${
                      competitor.trend === 'up' ? 'text-green-600' : 'text-slate-500'
                    }`}>
                      {competitor.trend === 'up' ? '↗' : '→'}
                    </span>
                  </div>
                  <div className="space-y-1 text-xs text-slate-600">
                    <p>Engagement: <span className="font-medium">{competitor.engagement}</span></p>
                    <p>Followers: <span className="font-medium">{competitor.followers}</span></p>
                    <p className="text-slate-500">{competitor.topContent}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Content Ideas */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <span>AI Content Ideas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contentIdeas.map((idea, index) => (
                <div key={index} className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
                  <h4 className="font-medium text-slate-900 text-sm mb-2">{idea.title}</h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {idea.type}
                    </span>
                    <span className="text-slate-500">{idea.platform}</span>
                  </div>
                  <div className="mt-2 text-xs text-slate-600">
                    <p>Reach: {idea.estimatedReach}</p>
                    <p>Engagement: <span className={`font-medium ${
                      idea.engagement === 'High' ? 'text-green-600' : 'text-yellow-600'
                    }`}>{idea.engagement}</span></p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
