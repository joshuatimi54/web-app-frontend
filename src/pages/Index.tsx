
import { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardOverview } from "@/components/dashboard/DashboardOverview";
import { ResearchTrends } from "@/components/research/ResearchTrends";
import { ContentPlanner } from "@/components/planner/ContentPlanner";
import { PostGenerator } from "@/components/generator/PostGenerator";
import { CampaignStrategy } from "@/components/campaign/CampaignStrategy";
import { MediaSuggestions } from "@/components/media/MediaSuggestions";
import { AutoPublisher } from "@/components/publisher/AutoPublisher";
import { TeamWorkspace } from "@/components/team/TeamWorkspace";
import { AISettings } from "@/components/settings/AISettings";
import { ContentLibrary } from "@/components/library/ContentLibrary";

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'research':
        return <ResearchTrends />;
      case 'planner':
        return <ContentPlanner />;
      case 'generator':
        return <PostGenerator />;
      case 'campaign':
        return <CampaignStrategy />;
      case 'media':
        return <MediaSuggestions />;
      case 'publisher':
        return <AutoPublisher />;
      case 'team':
        return <TeamWorkspace />;
      case 'settings':
        return <AISettings />;
      case 'library':
        return <ContentLibrary />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          <main className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto">
              {renderActiveSection()}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
