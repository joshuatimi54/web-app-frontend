
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Clock, CheckCircle, AlertCircle, Plus } from "lucide-react";

export function TeamWorkspace() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Content Manager",
      avatar: "SJ",
      status: "online",
      tasksCompleted: 12,
      tasksTotal: 15
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Graphic Designer",
      avatar: "MC",
      status: "away",
      tasksCompleted: 8,
      tasksTotal: 10
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Social Media Analyst",
      avatar: "ER",
      status: "online",
      tasksCompleted: 6,
      tasksTotal: 8
    },
    {
      id: 4,
      name: "David Kim",
      role: "Copywriter",
      avatar: "DK",
      status: "offline",
      tasksCompleted: 15,
      tasksTotal: 18
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      content: "Instagram post: New product launch announcement",
      author: "David Kim",
      platform: "Instagram",
      createdAt: "2 hours ago",
      status: "pending",
      comments: 3
    },
    {
      id: 2,
      content: "LinkedIn article: Industry trends 2024",
      author: "Sarah Johnson",
      platform: "LinkedIn",
      createdAt: "4 hours ago",
      status: "needs_changes",
      comments: 7
    },
    {
      id: 3,
      content: "Twitter thread: Productivity tips",
      author: "Emily Rodriguez",
      platform: "Twitter",
      createdAt: "1 day ago",
      status: "approved",
      comments: 2
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "approved",
      content: "Facebook campaign post",
      user: "Sarah Johnson",
      timestamp: "30 minutes ago"
    },
    {
      id: 2,
      action: "commented",
      content: "Instagram story design",
      user: "Mike Chen",
      timestamp: "1 hour ago"
    },
    {
      id: 3,
      action: "created",
      content: "LinkedIn article draft",
      user: "David Kim",
      timestamp: "2 hours ago"
    },
    {
      id: 4,
      action: "reviewed",
      content: "Twitter campaign strategy",
      user: "Emily Rodriguez",
      timestamp: "3 hours ago"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      online: 'bg-green-400',
      away: 'bg-yellow-400',
      offline: 'bg-gray-400',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-400';
  };

  const getApprovalStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-700',
      needs_changes: 'bg-red-100 text-red-700',
      approved: 'bg-green-100 text-green-700',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getApprovalStatusIcon = (status: string) => {
    const icons = {
      pending: <Clock className="w-4 h-4" />,
      needs_changes: <AlertCircle className="w-4 h-4" />,
      approved: <CheckCircle className="w-4 h-4" />,
    };
    return icons[status as keyof typeof icons] || <Clock className="w-4 h-4" />;
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Team Workspace</h1>
          <p className="text-slate-600 mt-2">Collaborate with your team on content creation</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </div>

      {/* Team Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-blue-100 text-blue-700 font-semibold">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`}></div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Tasks</span>
                  <span className="text-slate-900">{member.tasksCompleted}/{member.tasksTotal}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(member.tasksCompleted / member.tasksTotal) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Approvals */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <span>Pending Approvals</span>
              <Badge variant="secondary" className="ml-auto">
                {pendingApprovals.filter(item => item.status === 'pending').length}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="p-4 rounded-lg border border-slate-200 hover:border-blue-200 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900 mb-1">{item.content}</h4>
                    <p className="text-sm text-slate-600">by {item.author}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getApprovalStatusIcon(item.status)}
                    <span className={`text-xs px-2 py-1 rounded-full ${getApprovalStatusColor(item.status)}`}>
                      {item.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span>{item.platform}</span>
                    <span>{item.createdAt}</span>
                    <span className="flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>{item.comments}</span>
                    </span>
                  </div>
                  
                  {item.status === 'pending' && (
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Request Changes
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        Approve
                      </Button>
                    </div>
                  )}
                  
                  {item.status === 'needs_changes' && (
                    <Button variant="outline" size="sm">
                      View Comments
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-xs">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900">
                    <span className="font-medium">{activity.user}</span>
                    {' '}
                    <span className="text-slate-600">{activity.action}</span>
                    {' '}
                    <span className="font-medium">{activity.content}</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Team Stats */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">4</p>
              <p className="text-sm text-slate-600">Active Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">89</p>
              <p className="text-sm text-slate-600">Tasks Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">12</p>
              <p className="text-sm text-slate-600">Pending Reviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">156</p>
              <p className="text-sm text-slate-600">Comments This Week</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
