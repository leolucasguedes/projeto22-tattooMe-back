import * as budgetRepository from "../repositories/budgetRepository";
import { CreateBudgetData, CreateBudgetDataNoUser } from "../schemas/budgetSchema";

import AppLog from "../events/AppLog";

export async function createOneBudget(budgetInfo: CreateBudgetData | CreateBudgetDataNoUser) {

  await budgetRepository.create(budgetInfo);
  AppLog("Service", "Budget Created");
}

export async function saveReference(url: string, budgetId: number) {

  await budgetRepository.save(url, budgetId);
  AppLog("Service", "Reference saved");
}

export async function getBudgets(id: number) {
  const results = await budgetRepository.getUserBudgets(id);

  return results;
}

export async function getBudgetId() {
  const result = await budgetRepository.get();

  const size = result.length + 1;
  return size;
}

export const budgetService = {
  createOneBudget
};