
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image, Video, Camera, Lightbulb, Search, Download } from "lucide-react";

export function MediaSuggestions() {
  const mediaSuggestions = [
    {
      id: 1,
      type: "Image",
      title: "Minimalist Workspace Setup",
      description: "Clean desk with laptop, coffee cup, and plant. Natural lighting from the side. Focus on productivity and organization.",
      style: "Modern, clean, professional",
      colors: ["#F8F9FA", "#343A40", "#28A745"],
      dimensions: "1080x1080 (Square)",
      platforms: ["Instagram", "LinkedIn"],
      tags: ["workspace", "productivity", "minimal", "professional"]
    },
    {
      id: 2,
      type: "Video",
      title: "Behind-the-Scenes Process",
      description: "Time-lapse video showing the creative process from sketch to final product. Include hands working, materials, and transitions.",
      style: "Documentary, authentic",
      duration: "15-30 seconds",
      dimensions: "1080x1920 (Vertical)",
      platforms: ["Instagram Stories", "TikTok"],
      tags: ["process", "creativity", "behind-scenes", "authentic"]
    },
    {
      id: 3,
      type: "Infographic",
      title: "5 Steps to Success",
      description: "Step-by-step visual guide with icons, numbers, and brief descriptions. Use brand colors and maintain visual hierarchy.",
      style: "Informative, branded",
      colors: ["#007BFF", "#FFC107", "#28A745"],
      dimensions: "1080x1350 (Portrait)",
      platforms: ["Instagram", "LinkedIn", "Pinterest"],
      tags: ["educational", "infographic", "steps", "guide"]
    },
    {
      id: 4,
      type: "Photo",
      title: "Team Collaboration Shot",
      description: "Candid photo of team members working together, discussing ideas around a table. Natural expressions and genuine interaction.",
      style: "Candid, authentic, warm",
      lighting: "Natural, soft",
      dimensions: "1200x628 (Landscape)",
      platforms: ["LinkedIn", "Facebook"],
      tags: ["team", "collaboration", "authentic", "workplace"]
    }
  ];

  const quickTemplates = [
    {
      name: "Quote Post",
      description: "Inspirational quote with branded background",
      icon: "💭",
      dimensions: "1080x1080"
    },
    {
      name: "Product Showcase",
      description: "Clean product photography setup",
      icon: "📦",
      dimensions: "1080x1080"
    },
    {
      name: "Before/After",
      description: "Split-screen comparison layout",
      icon: "⚡",
      dimensions: "1080x1080"
    },
    {
      name: "Step-by-Step",
      description: "Sequential process visualization",
      icon: "📋",
      dimensions: "1080x1350"
    },
    {
      name: "Statistics",
      description: "Data visualization with charts",
      icon: "📊",
      dimensions: "1080x1080"
    },
    {
      name: "Announcement",
      description: "Event or news announcement layout",
      icon: "📢",
      dimensions: "1080x1080"
    }
  ];

  const getTypeIcon = (type: string) => {
    const icons = {
      Image: Image,
      Video: Video,
      Photo: Camera,
      Infographic: Image,
    };
    return icons[type as keyof typeof icons] || Image;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      Image: 'bg-blue-100 text-blue-700',
      Video: 'bg-red-100 text-red-700',
      Photo: 'bg-green-100 text-green-700',
      Infographic: 'bg-purple-100 text-purple-700',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Media Suggestions</h1>
          <p className="text-slate-600 mt-2">AI-powered visual content ideas and briefs</p>
        </div>
      </div>

      {/* Search and Filter */}
      <Card className="border-0 shadow-sm bg-white">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                placeholder="Search for specific visual ideas, styles, or content types..."
                className="pl-10 py-3 border-slate-200 focus:border-blue-500"
              />
            </div>
            <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white">
              Generate Ideas
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Media Suggestions */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">AI-Generated Visual Briefs</h2>
          <div className="space-y-6">
            {mediaSuggestions.map((suggestion) => {
              const TypeIcon = getTypeIcon(suggestion.type);
              return (
                <Card key={suggestion.id} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${getTypeColor(suggestion.type)}`}>
                          <TypeIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-slate-900">
                            {suggestion.title}
                          </CardTitle>
                          <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(suggestion.type)}`}>
                            {suggestion.type}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Save Brief
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">{suggestion.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-2">Style & Mood</p>
                        <p className="text-sm text-slate-900">{suggestion.style}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-600 mb-2">Dimensions</p>
                        <p className="text-sm text-slate-900">{suggestion.dimensions}</p>
                      </div>
                      {suggestion.colors && (
                        <div>
                          <p className="text-sm font-medium text-slate-600 mb-2">Color Palette</p>
                          <div className="flex space-x-2">
                            {suggestion.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-6 h-6 rounded-full border border-slate-200"
                                style={{ backgroundColor: color }}
                                title={color}
                              ></div>
                            ))}
                          </div>
                        </div>
                      )}
                      {suggestion.duration && (
                        <div>
                          <p className="text-sm font-medium text-slate-600 mb-2">Duration</p>
                          <p className="text-sm text-slate-900">{suggestion.duration}</p>
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-600 mb-2">Recommended Platforms</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestion.platforms.map((platform) => (
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
                      <p className="text-sm font-medium text-slate-600 mb-2">Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestion.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Templates */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                <span>Quick Templates</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickTemplates.map((template, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{template.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 text-sm">{template.name}</h4>
                      <p className="text-xs text-slate-600">{template.description}</p>
                      <p className="text-xs text-slate-500 mt-1">{template.dimensions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Visual Guidelines */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Visual Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-1">Brand Consistency</h4>
                <p className="text-sm text-blue-700">Maintain consistent colors, fonts, and style across all visuals.</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                <h4 className="font-medium text-green-900 mb-1">High Quality</h4>
                <p className="text-sm text-green-700">Always use high-resolution images (minimum 1080px width).</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-1">Platform Optimization</h4>
                <p className="text-sm text-purple-700">Adapt dimensions and style for each social platform's requirements.</p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-1">Accessibility</h4>
                <p className="text-sm text-orange-700">Ensure good contrast and readability for all users.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
