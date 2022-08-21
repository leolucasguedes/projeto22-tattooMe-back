import { Request, Response } from "express";
import * as budgetService from "../services/budgetService";
import AppLog from "../events/AppLog";
import { CreateBudgetData } from "../schemas/budgetSchema";

export async function createBudget(req: Request, res: Response) {
  const body: CreateBudgetData = req.body;
  const user = res.locals.user;
  if (user) {
    const userId = user.id;
    const budgetInfo = { ...body, userId };
  }
  const budgetInfo = { ...body };

  await budgetService.createOneBudget(budgetInfo);

  AppLog("Controller", "Create budget done");
  res.sendStatus(201);
}

export async function getUserBudgets(req: Request, res: Response) {
  const { id } = req.params;
  
  const results = await budgetService.getBudgets(Number(id));

  AppLog("Controller", "Budgets got");
  res.status(200).send(results);
};