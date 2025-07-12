
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FolderOpen, Search, Filter, Plus, MoreHorizontal, Image, FileText, Video } from "lucide-react";

export function ContentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "Product Launch Announcement Template",
      type: "template",
      category: "marketing",
      platform: "Instagram",
      tags: ["product", "launch", "announcement"],
      dateCreated: "2024-01-10",
      uses: 12,
      preview: "🚀 Excited to announce our latest innovation...",
    },
    {
      id: 2,
      title: "Weekly Motivation Quote",
      type: "image",
      category: "engagement",
      platform: "LinkedIn",
      tags: ["motivation", "quotes", "weekly"],
      dateCreated: "2024-01-08",
      uses: 8,
      preview: "Motivational quote with branded background",
    },
    {
      id: 3,
      title: "Behind the Scenes Video Script",
      type: "video",
      category: "brand",
      platform: "Instagram",
      tags: ["behind-scenes", "authentic", "process"],
      dateCreated: "2024-01-05",
      uses: 5,
      preview: "Take your audience behind the curtain...",
    },
    {
      id: 4,
      title: "Industry Insights Article Template",
      type: "template",
      category: "educational",
      platform: "LinkedIn",
      tags: ["insights", "industry", "thought-leadership"],
      dateCreated: "2024-01-03",
      uses: 15,
      preview: "The [Industry] landscape is evolving rapidly...",
    },
    {
      id: 5,
      title: "Customer Success Story",
      type: "template",
      category: "social-proof",
      platform: "Multiple",
      tags: ["testimonial", "success", "customer"],
      dateCreated: "2023-12-28",
      uses: 22,
      preview: "Meet [Customer Name], who achieved amazing results...",
    },
    {
      id: 6,
      title: "Infographic: 5 Steps to Success",
      type: "image",
      category: "educational",
      platform: "Pinterest",
      tags: ["infographic", "steps", "guide"],
      dateCreated: "2023-12-25",
      uses: 18,
      preview: "Step-by-step visual guide with icons",
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'marketing', name: 'Marketing', count: 3 },
    { id: 'engagement', name: 'Engagement', count: 2 },
    { id: 'brand', name: 'Brand', count: 1 },
    { id: 'educational', name: 'Educational', count: 2 },
    { id: 'social-proof', name: 'Social Proof', count: 1 }
  ];

  const getTypeIcon = (type: string) => {
    const icons = {
      template: FileText,
      image: Image,
      video: Video,
    };
    return icons[type as keyof typeof icons] || FileText;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      template: 'bg-blue-100 text-blue-700',
      image: 'bg-green-100 text-green-700',
      video: 'bg-red-100 text-red-700',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const filteredItems = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Content Library</h1>
          <p className="text-slate-600 mt-2">Organize and reuse your best content assets</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Content
          </Button>
        </div>
      </div>

      {/* Search and Categories */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search templates, images, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 border-slate-200 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto lg:overflow-visible">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const TypeIcon = getTypeIcon(item.type);
          return (
            <Card key={item.id} className="border-0 shadow-sm bg-white hover:shadow-md transition-shadow group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                      <TypeIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-sm font-semibold text-slate-900 line-clamp-2">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Preview */}
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-700 line-clamp-2">{item.preview}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {item.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{item.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-4">
                    <span>{item.platform}</span>
                    <span>Used {item.uses}x</span>
                  </div>
                  <span>{new Date(item.dateCreated).toLocaleDateString()}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Use Template
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <FolderOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No content found</h3>
          <p className="text-slate-600 mb-6">
            {searchTerm ? 'Try adjusting your search terms' : 'Start building your content library'}
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Template
          </Button>
        </div>
      )}

      {/* Library Stats */}
      <Card className="border-0 shadow-sm bg-white">
        <CardHeader>
          <CardTitle>Library Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{contentItems.length}</p>
              <p className="text-sm text-slate-600">Total Items</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Image className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {contentItems.filter(item => item.type === 'template').length}
              </p>
              <p className="text-sm text-slate-600">Templates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Video className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {contentItems.reduce((sum, item) => sum + item.uses, 0)}
              </p>
              <p className="text-sm text-slate-600">Total Uses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FolderOpen className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-slate-900">{categories.length - 1}</p>
              <p className="text-sm text-slate-600">Categories</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
