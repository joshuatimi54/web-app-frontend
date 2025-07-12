
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Users, Calendar, Plus } from "lucide-react";

export function CampaignStrategy() {
  const campaigns = [
    {
      id: 1,
      name: "Q1 Product Launch",
      goal: "Brand Awareness",
      status: "Active",
      progress: 65,
      startDate: "2024-01-01",
      endDate: "2024-03-31",
      budget: "$5,000",
      platforms: ["Instagram", "LinkedIn", "Twitter"],
      metrics: {
        reach: "125K",
        engagement: "8.5%",
        conversions: "234",
      }
    },
    {
      id: 2,
      name: "Spring Newsletter Signup",
      goal: "Lead Generation",
      status: "Planning",
      progress: 25,
      startDate: "2024-02-15",
      endDate: "2024-04-15",
      budget: "$2,500",
      platforms: ["Facebook", "LinkedIn"],
      metrics: {
        reach: "0",
        engagement: "0%",
        conversions: "0",
      }
    },
    {
      id: 3,
      name: "Customer Success Stories",
      goal: "Social Proof",
      status: "Completed",
      progress: 100,
      startDate: "2023-11-01",
      endDate: "2023-12-31",
      budget: "$1,200",
      platforms: ["Instagram", "Twitter"],
      metrics: {
        reach: "89K",
        engagement: "12.3%",
        conversions: "156",
      }
    }
  ];

  const campaignTemplates = [
    {
      name: "Product Launch",
      description: "Comprehensive campaign for new product introductions",
      duration: "6-8 weeks",
      platforms: ["Instagram", "LinkedIn", "Twitter", "Facebook"],
      contentTypes: ["Teasers", "Behind-the-scenes", "Launch posts", "User testimonials"]
    },
    {
      name: "Brand Awareness",
      description: "Build recognition and establish thought leadership",
      duration: "3-4 months",
      platforms: ["LinkedIn", "Twitter", "Instagram"],
      contentTypes: ["Educational content", "Industry insights", "Company culture", "Expert interviews"]
    },
    {
      name: "Lead Generation",
      description: "Drive sign-ups and capture qualified prospects",
      duration: "4-6 weeks",
      platforms: ["LinkedIn", "Facebook", "Twitter"],
      contentTypes: ["Webinar promotion", "Free resources", "Case studies", "Email capture"]
    },
    {
      name: "Customer Retention",
      description: "Engage existing customers and reduce churn",
      duration: "Ongoing",
      platforms: ["Instagram", "Facebook", "Email"],
      contentTypes: ["Success stories", "Tips & tutorials", "Community highlights", "Exclusive offers"]
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      Active: 'bg-green-100 text-green-700',
      Planning: 'bg-yellow-100 text-yellow-700',
      Completed: 'bg-blue-100 text-blue-700',
      Paused: 'bg-gray-100 text-gray-700',
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getPlatformColor = (platform: string) => {
    const colors = {
      Instagram: 'bg-pink-500',
      LinkedIn: 'bg-blue-600',
      Twitter: 'bg-sky-500',
      Facebook: 'bg-blue-700',
    };
    return colors[platform as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Campaign Strategy</h1>
          <p className="text-slate-600 mt-2">Plan and manage your marketing campaigns</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Active Campaigns */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">Active Campaigns</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {campaign.name}
                  </CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(campaign.status)}`}>
                    {campaign.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{campaign.goal}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Progress</span>
                    <span className="text-sm font-medium text-slate-900">{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Reach</p>
                    <p className="font-semibold text-slate-900">{campaign.metrics.reach}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Engagement</p>
                    <p className="font-semibold text-slate-900">{campaign.metrics.engagement}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Conversions</p>
                    <p className="font-semibold text-slate-900">{campaign.metrics.conversions}</p>
                  </div>
                </div>

                {/* Platforms */}
                <div>
                  <p className="text-sm text-slate-500 mb-2">Platforms</p>
                  <div className="flex items-center space-x-2">
                    {campaign.platforms.map((platform) => (
                      <div
                        key={platform}
                        className={`w-6 h-6 rounded-full ${getPlatformColor(platform)} flex items-center justify-center`}
                        title={platform}
                      >
                        <span className="text-white text-xs font-medium">
                          {platform.charAt(0)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline & Budget */}
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(campaign.startDate).toLocaleDateString()}</span>
                  </div>
                  <span className="font-medium text-slate-900">{campaign.budget}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Campaign Templates */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">Campaign Templates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campaignTemplates.map((template, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-900 mb-2">
                      {template.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600">{template.description}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Use Template
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">Duration</span>
                  <span className="text-sm font-medium text-slate-900">{template.duration}</span>
                </div>

                <div>
                  <p className="text-sm text-slate-500 mb-2">Recommended Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {template.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-500 mb-2">Content Types</p>
                  <div className="grid grid-cols-2 gap-1">
                    {template.contentTypes.map((type) => (
                      <span
                        key={type}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded text-center"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Campaign Performance Overview */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span>Campaign Performance Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">8</p>
              <p className="text-sm text-slate-600">Active Campaigns</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">245K</p>
              <p className="text-sm text-slate-600">Total Reach</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">9.2%</p>
              <p className="text-sm text-slate-600">Avg. Engagement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">23</p>
              <p className="text-sm text-slate-600">Days Avg. Duration</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
