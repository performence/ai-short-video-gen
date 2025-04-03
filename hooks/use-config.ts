import { DashboardConfig, DocsConfig, MarketingConfig } from '@/types'

export function useConfig() {
  return {
    dashboard: {
      mainNav: [],
      sidebarNav: []
    } as DashboardConfig,
    docs: {
      mainNav: [],
      sidebarNav: []
    } as DocsConfig,
    marketing: {
      mainNav: []
    } as MarketingConfig
  }
}
