
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Calendar, BarChart } from "lucide-react";

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Engagement",
      value: "12.4K",
      change: "+12.5%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Followers",
      value: "8,924",
      change: "+3.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Posts This Week",
      value: "28",
      change: "On track",
      trend: "neutral",
      icon: Calendar,
    },
    {
      title: "Reach",
      value: "45.6K",
      change: "+8.1%",
      trend: "up",
      icon: BarChart,
    },
  ];

  const recentPosts = [
    {
      platform: "Instagram",
      content: "10 productivity tips that changed my life 🚀",
      engagement: "1.2K likes, 43 comments",
      time: "2 hours ago",
      status: "performing well",
    },
    {
      platform: "LinkedIn",
      content: "The future of AI in business automation...",
      engagement: "234 likes, 12 comments",
      time: "5 hours ago",
      status: "good",
    },
    {
      platform: "Twitter",
      content: "Quick thread on social media trends 🧵",
      engagement: "89 likes, 23 retweets",
      time: "1 day ago",
      status: "average",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600 mt-2">Welcome back! Here's your social media overview</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">Last updated</p>
          <p className="font-semibold text-slate-900">Just now</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-slate-500'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Posts */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900">Recent Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-xs">
                    {post.platform.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900 truncate">{post.content}</p>
                  <p className="text-sm text-slate-600 mt-1">{post.engagement}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-slate-500">{post.time}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      post.status === 'performing well' ? 'bg-green-100 text-green-700' :
                      post.status === 'good' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Content Calendar Preview */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-900">This Week's Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                <div key={day} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-slate-900">{day}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-600">{2 + index} posts</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 bg-pink-500 rounded-sm"></div>
                      <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      {index > 1 && <div className="w-4 h-4 bg-green-500 rounded-sm"></div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View Full Calendar
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
