
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Send, Clock, CheckCircle, XCircle, AlertCircle, Settings } from "lucide-react";

export function AutoPublisher() {
  const [autoPublishEnabled, setAutoPublishEnabled] = useState(true);

  const connectedPlatforms = [
    {
      name: "Instagram",
      connected: true,
      lastSync: "2 hours ago",
      status: "active",
      posts: 156,
      icon: "📷"
    },
    {
      name: "LinkedIn",
      connected: true,
      lastSync: "1 hour ago",
      status: "active",
      posts: 89,
      icon: "💼"
    },
    {
      name: "Twitter",
      connected: false,
      lastSync: "Never",
      status: "disconnected",
      posts: 0,
      icon: "🐦"
    },
    {
      name: "Facebook",
      connected: true,
      lastSync: "3 hours ago",
      status: "warning",
      posts: 67,
      icon: "👥"
    }
  ];

  const publishQueue = [
    {
      id: 1,
      content: "Excited to share our latest product update! 🚀",
      platform: "Instagram",
      scheduledTime: "2024-01-15 14:30",
      status: "scheduled",
      imageCount: 3
    },
    {
      id: 2,
      content: "5 productivity tips that changed how I work...",
      platform: "LinkedIn",
      scheduledTime: "2024-01-15 09:00",
      status: "publishing",
      imageCount: 0
    },
    {
      id: 3,
      content: "Behind the scenes of our design process 🎨",
      platform: "Instagram",
      scheduledTime: "2024-01-14 16:00",
      status: "published",
      imageCount: 1
    },
    {
      id: 4,
      content: "Quick thread about social media trends",
      platform: "Twitter",
      scheduledTime: "2024-01-14 12:00",
      status: "failed",
      imageCount: 0
    }
  ];

  const getStatusIcon = (status: string) => {
    const icons = {
      scheduled: <Clock className="w-4 h-4 text-blue-600" />,
      publishing: <Send className="w-4 h-4 text-yellow-600 animate-pulse" />,
      published: <CheckCircle className="w-4 h-4 text-green-600" />,
      failed: <XCircle className="w-4 h-4 text-red-600" />,
    };
    return icons[status as keyof typeof icons] || <AlertCircle className="w-4 h-4 text-gray-600" />;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      scheduled: 'bg-blue-100 text-blue-700',
      publishing: 'bg-yellow-100 text-yellow-700',
      published: 'bg-green-100 text-green-700',
      failed: 'bg-red-100 text-red-700',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getPlatformStatusColor = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      disconnected: 'bg-red-100 text-red-700',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Auto-Publisher</h1>
          <p className="text-slate-600 mt-2">Manage your social media publishing automation</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-slate-700">Auto-publish</span>
            <Switch 
              checked={autoPublishEnabled} 
              onCheckedChange={setAutoPublishEnabled}
            />
          </div>
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Connected Platforms */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">Connected Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {connectedPlatforms.map((platform, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{platform.name}</h3>
                      <p className="text-sm text-slate-500">{platform.posts} posts</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getPlatformStatusColor(platform.status)}`}>
                    {platform.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Last sync</span>
                    <span className="text-slate-900">{platform.lastSync}</span>
                  </div>
                  
                  {platform.connected ? (
                    <Button variant="outline" size="sm" className="w-full">
                      Configure
                    </Button>
                  ) : (
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Connect
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Publish Queue */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Publishing Queue</h2>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Clock className="w-4 h-4" />
            <span>Next publish in 2 hours</span>
          </div>
        </div>
        
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100">
              {publishQueue.map((item) => (
                <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getStatusIcon(item.status)}
                        <span className="font-medium text-slate-900">{item.platform}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      
                      <p className="text-slate-900 mb-2">{item.content}</p>
                      
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <span>📅 {new Date(item.scheduledTime).toLocaleString()}</span>
                        {item.imageCount > 0 && (
                          <span>📸 {item.imageCount} {item.imageCount === 1 ? 'image' : 'images'}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {item.status === 'failed' && (
                        <Button variant="outline" size="sm">
                          Retry
                        </Button>
                      )}
                      {item.status === 'scheduled' && (
                        <>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Cancel
                          </Button>
                        </>
                      )}
                      {item.status === 'published' && (
                        <Button variant="outline" size="sm">
                          View Post
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Publishing Stats */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle>Publishing Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Send className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">127</p>
              <p className="text-sm text-slate-600">Posts Published</p>
              <p className="text-xs text-green-600 mt-1">This Month</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">98.5%</p>
              <p className="text-sm text-slate-600">Success Rate</p>
              <p className="text-xs text-green-600 mt-1">Last 30 days</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">23</p>
              <p className="text-sm text-slate-600">Scheduled</p>
              <p className="text-xs text-yellow-600 mt-1">Next 7 days</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">2</p>
              <p className="text-sm text-slate-600">Failed Posts</p>
              <p className="text-xs text-red-600 mt-1">Needs attention</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
