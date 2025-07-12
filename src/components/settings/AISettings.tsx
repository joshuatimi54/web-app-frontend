
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Brain, Palette, Target, Globe, Plus, X } from "lucide-react";

export function AISettings() {
  const [brandTone, setBrandTone] = useState('professional');
  const [keywords, setKeywords] = useState(['AI', 'automation', 'productivity', 'business']);
  const [newKeyword, setNewKeyword] = useState('');
  const [autoGenerate, setAutoGenerate] = useState(true);
  const [contentOptimization, setContentOptimization] = useState(true);

  const addKeyword = () => {
    if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
      setKeywords([...keywords, newKeyword.trim()]);
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter(k => k !== keyword));
  };

  const toneOptions = [
    { value: 'professional', label: 'Professional', description: 'Formal, business-focused communication' },
    { value: 'casual', label: 'Casual', description: 'Friendly, approachable tone' },
    { value: 'funny', label: 'Funny', description: 'Humorous, entertaining content' },
    { value: 'inspiring', label: 'Inspiring', description: 'Motivational, uplifting messages' },
    { value: 'educational', label: 'Educational', description: 'Informative, teaching-focused' },
    { value: 'bold', label: 'Bold', description: 'Confident, attention-grabbing style' }
  ];

  const industryOptions = [
    'Technology', 'Marketing', 'Finance', 'Healthcare', 'Education', 
    'E-commerce', 'Real Estate', 'Food & Beverage', 'Fashion', 'Travel'
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Settings</h1>
          <p className="text-slate-600 mt-2">Configure AI behavior and brand voice</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Brand Voice & Tone */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-purple-600" />
              <span>Brand Voice & Tone</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Brand Voice</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {toneOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      brandTone === option.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    onClick={() => setBrandTone(option.value)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">{option.label}</h4>
                      {brandTone === option.value && (
                        <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-slate-600">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Brand Description</label>
              <Textarea
                placeholder="Describe your brand personality, values, and unique characteristics..."
                className="min-h-[100px] border-slate-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Sample Brand Voice</label>
              <div className="p-4 bg-slate-50 rounded-lg border">
                <p className="text-sm text-slate-700 italic">
                  "We're passionate about helping businesses streamline their workflows with cutting-edge AI solutions. 
                  Our approach is straightforward, results-driven, and always focused on delivering real value to our clients."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Keywords & Focus Areas */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-600" />
              <span>Keywords & Focus Areas</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Industry</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  {industryOptions.map((industry) => (
                    <SelectItem key={industry} value={industry.toLowerCase()}>
                      {industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Target Keywords</label>
              <div className="flex space-x-2 mb-3">
                <Input
                  placeholder="Add a keyword..."
                  value={newKeyword}
                  onChange={(e) => setNewKeyword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                  className="flex-1"
                />
                <Button onClick={addKeyword} size="sm">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="flex items-center space-x-1">
                    <span>{keyword}</span>
                    <button
                      onClick={() => removeKeyword(keyword)}
                      className="text-slate-500 hover:text-slate-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Target Audience</label>
              <Textarea
                placeholder="Describe your ideal customer (demographics, interests, pain points)..."
                className="min-h-[80px] border-slate-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Content Goals</label>
              <div className="space-y-2">
                {['Brand Awareness', 'Lead Generation', 'Customer Education', 'Community Building', 'Sales'].map((goal) => (
                  <label key={goal} className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-slate-300" />
                    <span className="text-sm text-slate-700">{goal}</span>
                  </label>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Behavior Settings */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-blue-600" />
              <span>AI Behavior</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-slate-900">Auto-generate Content Ideas</h4>
                <p className="text-sm text-slate-600">Automatically suggest content based on trends</p>
              </div>
              <Switch checked={autoGenerate} onCheckedChange={setAutoGenerate} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-slate-900">Content Optimization</h4>
                <p className="text-sm text-slate-600">Optimize posts for each platform automatically</p>
              </div>
              <Switch checked={contentOptimization} onCheckedChange={setContentOptimization} />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Creativity Level</label>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Conservative</span>
                  <span className="text-slate-600">Creative</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  defaultValue="7"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Content Length Preference</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short & Concise</SelectItem>
                  <SelectItem value="medium">Medium Length</SelectItem>
                  <SelectItem value="long">Long & Detailed</SelectItem>
                  <SelectItem value="adaptive">Adaptive (Platform-based)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Platform-Specific Settings */}
        <Card className="border-0 shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-indigo-600" />
              <span>Platform-Specific Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-pink-500 rounded"></div>
                    <span className="font-medium text-slate-900">Instagram</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Hashtags:</span>
                    <span className="text-slate-900 ml-1">5-10 per post</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Tone:</span>
                    <span className="text-slate-900 ml-1">Visual-first</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    <span className="font-medium text-slate-900">LinkedIn</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Style:</span>
                    <span className="text-slate-900 ml-1">Professional</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Length:</span>
                    <span className="text-slate-900 ml-1">Medium-long</span>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-sky-500 rounded"></div>
                    <span className="font-medium text-slate-900">Twitter</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Style:</span>
                    <span className="text-slate-900 ml-1">Conversational</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Threads:</span>
                    <span className="text-slate-900 ml-1">Auto-suggest</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
