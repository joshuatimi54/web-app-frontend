
import { 
  BarChart3, 
  Search, 
  Calendar, 
  Rocket, 
  PenTool, 
  Image, 
  Send, 
  Users, 
  Settings, 
  FolderOpen, 
  Bell,
  CreditCard
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'research', label: 'Research & Trends', icon: Search },
  { id: 'planner', label: 'Content Planner', icon: Calendar },
  { id: 'campaign', label: 'Campaign Strategy', icon: Rocket },
  { id: 'generator', label: 'Post Generator', icon: PenTool },
  { id: 'media', label: 'Media Suggestions', icon: Image },
  { id: 'publisher', label: 'Auto-Publisher', icon: Send },
  { id: 'team', label: 'Team Workspace', icon: Users },
  { id: 'settings', label: 'AI Settings', icon: Settings },
  { id: 'library', label: 'Library', icon: FolderOpen },
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-100 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <div>
            <h1 className="font-semibold text-slate-900">Easeinbiz AI</h1>
            <p className="text-xs text-slate-500">Social Media Manager</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full justify-start px-3 py-2 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-slate-100 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-start px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg">
              <Bell className="h-4 w-4 mr-3" />
              <span className="font-medium">Notifications</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-start px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg">
              <CreditCard className="h-4 w-4 mr-3" />
              <span className="font-medium">Account & Billing</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
