
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, MoreHorizontal, Clock, Users } from "lucide-react";

export function ContentPlanner() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<'calendar' | 'list'>('calendar');

  const scheduledPosts = [
    {
      id: 1,
      date: '2024-01-15',
      time: '09:00',
      platform: 'Instagram',
      content: 'Monday Motivation: 5 tips to start your week right ✨',
      type: 'image',
      status: 'scheduled',
      engagement: 'High expected',
    },
    {
      id: 2,
      date: '2024-01-15',
      time: '14:30',
      platform: 'LinkedIn',
      content: 'Industry insights: The future of remote work in 2024',
      type: 'article',
      status: 'draft',
      engagement: 'Medium expected',
    },
    {
      id: 3,
      date: '2024-01-16',
      time: '10:15',
      platform: 'Twitter',
      content: 'Quick thread about productivity hacks 🧵',
      type: 'thread',
      status: 'scheduled',
      engagement: 'High expected',
    },
    {
      id: 4,
      date: '2024-01-16',
      time: '16:00',
      platform: 'Instagram',
      content: 'Behind the scenes of our design process 🎨',
      type: 'video',
      status: 'needs_review',
      engagement: 'Very High expected',
    },
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentWeek = [15, 16, 17, 18, 19, 20, 21];

  const getPlatformColor = (platform: string) => {
    const colors = {
      Instagram: 'bg-pink-500',
      LinkedIn: 'bg-blue-600',
      Twitter: 'bg-sky-500',
      Facebook: 'bg-blue-700',
    };
    return colors[platform as keyof typeof colors] || 'bg-gray-500';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      scheduled: 'bg-green-100 text-green-700',
      draft: 'bg-yellow-100 text-yellow-700',
      needs_review: 'bg-red-100 text-red-700',
      published: 'bg-blue-100 text-blue-700',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Content Planner</h1>
          <p className="text-slate-600 mt-2">Plan, schedule, and manage your content calendar</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex bg-slate-100 rounded-lg p-1">
            <button
              onClick={() => setView('calendar')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                view === 'calendar' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Calendar
            </button>
            <button
              onClick={() => setView('list')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                view === 'list' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              List
            </button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>
      </div>

      {view === 'calendar' ? (
        // Calendar View
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader className="border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>January 2024</span>
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Week Header */}
                <div className="grid grid-cols-7 border-b border-slate-100">
                  {weekDays.map((day) => (
                    <div key={day} className="p-4 text-center font-medium text-slate-600 bg-slate-50">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Week Days */}
                <div className="grid grid-cols-7">
                  {currentWeek.map((date, index) => {
                    const dayPosts = scheduledPosts.filter(post => 
                      new Date(post.date).getDate() === date
                    );
                    
                    return (
                      <div key={date} className="min-h-[120px] p-2 border-r border-slate-100 last:border-r-0">
                        <div className="text-sm font-medium text-slate-900 mb-2">{date}</div>
                        <div className="space-y-1">
                          {dayPosts.map((post) => (
                            <div
                              key={post.id}
                              className="p-2 rounded text-xs bg-slate-50 border-l-2 border-blue-500 cursor-pointer hover:bg-slate-100"
                            >
                              <div className="flex items-center space-x-1 mb-1">
                                <div className={`w-2 h-2 rounded-full ${getPlatformColor(post.platform)}`}></div>
                                <span className="text-slate-600">{post.time}</span>
                              </div>
                              <p className="text-slate-900 font-medium truncate">{post.content}</p>
                            </div>
                          ))}
                        </div>
                        <button className="w-full mt-2 p-1 text-xs text-slate-400 hover:text-blue-600 border border-dashed border-slate-200 rounded">
                          + Add post
                        </button>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {scheduledPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="p-3 rounded-lg bg-slate-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getPlatformColor(post.platform)}`}></div>
                        <span className="text-sm font-medium text-slate-900">{post.time}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(post.status)}`}>
                        {post.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 truncate">{post.content}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">This Week</span>
                  <span className="font-semibold text-slate-900">12 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Scheduled</span>
                  <span className="font-semibold text-green-600">8 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Drafts</span>
                  <span className="font-semibold text-yellow-600">3 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Need Review</span>
                  <span className="font-semibold text-red-600">1 post</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        // List View
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle>All Scheduled Posts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="p-4 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-4 h-4 rounded-full ${getPlatformColor(post.platform)}`}></div>
                      <span className="font-medium text-slate-900">{post.platform}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-600">{post.date} at {post.time}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(post.status)}`}>
                        {post.status.replace('_', ' ')}
                      </span>
                    </div>
                    <p className="text-slate-900 mb-2">{post.content}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{post.engagement}</span>
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
