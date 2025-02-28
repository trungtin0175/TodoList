export interface EmployeeType {
  id: number;
  month: string;
  count: number;
}

export interface RevenueType {
  id: number;
  year: number;
  amount: number;
}

export interface DashboardType {
  id: number;
  employee: EmployeeType[];
  revenue: RevenueType[];
}
