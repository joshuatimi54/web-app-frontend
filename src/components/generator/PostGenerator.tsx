
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wand2, Copy, RefreshCw, Save, Send } from "lucide-react";

export function PostGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [platform, setPlatform] = useState('');
  const [contentType, setContentType] = useState('');
  const [tone, setTone] = useState('');

  const generateContent = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const sampleContent = `🚀 Ready to transform your business with AI?

Here are 5 game-changing AI tools that every entrepreneur should know about:

1. ChatGPT for content creation & customer support
2. Midjourney for stunning visual content
3. Notion AI for enhanced productivity
4. Zapier for workflow automation
5. Grammarly for polished communication

Which one are you most excited to try? Drop a comment below! 👇

#AI #Business #Entrepreneurship #Productivity #Innovation

---

💡 Pro tip: Start with one tool, master it, then expand your AI toolkit gradually. Quality over quantity always wins!

What's your experience with AI tools? Share your favorite in the comments! 🤖✨`;
      
      setGeneratedContent(sampleContent);
      setIsGenerating(false);
    }, 2000);
  };

  const suggestions = [
    {
      category: "Sales Copy",
      examples: [
        "Limited time offer announcement",
        "Product launch countdown",
        "Customer success story",
        "Free trial promotion"
      ]
    },
    {
      category: "Educational",
      examples: [
        "How-to tutorial",
        "Industry insights",
        "Tips and tricks",
        "Myth-busting post"
      ]
    },
    {
      category: "Engagement",
      examples: [
        "Question to audience",
        "Poll or survey",
        "Behind-the-scenes",
        "User-generated content"
      ]
    }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Post Generator</h1>
          <p className="text-slate-600 mt-2">Create engaging content with AI assistance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Generator */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wand2 className="w-5 h-5 text-purple-600" />
                <span>Generate Content</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Platform</label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Content Type</label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="behind-scenes">Behind the Scenes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tone</label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="funny">Funny</SelectItem>
                      <SelectItem value="inspiring">Inspiring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Content Brief</label>
                <Textarea
                  placeholder="Describe what you want to post about. Be specific about your topic, key points, and target audience..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px] border-slate-200 focus:border-blue-500"
                />
              </div>

              <Button 
                onClick={generateContent}
                disabled={!prompt || isGenerating}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Content */}
          {(generatedContent || isGenerating) && (
            <Card className="border-0 shadow-sm bg-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Generated Content</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <RefreshCw className="w-4 h-4 mr-1" />
                      Regenerate
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="w-4 h-4 mr-1" />
                      Copy
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isGenerating ? (
                  <div className="space-y-3">
                    <div className="animate-pulse bg-slate-200 h-4 rounded w-3/4"></div>
                    <div className="animate-pulse bg-slate-200 h-4 rounded w-full"></div>
                    <div className="animate-pulse bg-slate-200 h-4 rounded w-2/3"></div>
                    <div className="animate-pulse bg-slate-200 h-4 rounded w-full"></div>
                    <div className="animate-pulse bg-slate-200 h-4 rounded w-1/2"></div>
                  </div>
                ) : (
                  <>
                    <Textarea
                      value={generatedContent}
                      onChange={(e) => setGeneratedContent(e.target.value)}
                      className="min-h-[300px] border-slate-200 focus:border-blue-500"
                    />
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-sm text-slate-500">
                        Characters: {generatedContent.length} | Words: {generatedContent.split(' ').length}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Save className="w-4 h-4 mr-1" />
                          Save Draft
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Send className="w-4 h-4 mr-1" />
                          Schedule Post
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Content Suggestions */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Content Ideas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {suggestions.map((category, index) => (
                <div key={index}>
                  <h4 className="font-medium text-slate-900 mb-2">{category.category}</h4>
                  <div className="space-y-1">
                    {category.examples.map((example, idx) => (
                      <button
                        key={idx}
                        onClick={() => setPrompt(example)}
                        className="block w-full text-left text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded transition-colors"
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Writing Tips */}
          <Card className="border-0 shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Writing Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-1">Be Specific</h4>
                <p className="text-sm text-blue-700">The more details you provide, the better the AI can tailor content to your needs.</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                <h4 className="font-medium text-green-900 mb-1">Include Context</h4>
                <p className="text-sm text-green-700">Mention your industry, target audience, and goals for better results.</p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                <h4 className="font-medium text-purple-900 mb-1">Experiment</h4>
                <p className="text-sm text-purple-700">Try different tones and styles to find what works best for your brand.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
