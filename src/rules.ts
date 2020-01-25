import { quests as allQuests } from "./data/Quests";
export const questCanBeUpdated = (currentQuests: any, toCheck: any) => {
  const steps = allQuests[toCheck[0]].steps.map((x: any) => x.event);
  const currentStep = toCheck[1];
  if (currentQuests.length === 0 && currentStep === steps[0]) {
    // We re taking this quest
    return true;
  }
  if (currentQuests.length === 0) {
    // Quest is not taken
    return false;
  }
  const currentStepIndex = steps.indexOf(toCheck[1]);
  const prevStep = steps[currentStepIndex - 1];
  const currentQuestEvents = currentQuests[toCheck[0]];
  if (currentQuestEvents.indexOf(prevStep) === -1) {
    // Previous step wasn't completed
    return false;
  }
  if (currentQuestEvents.indexOf(currentStep) !== -1) {
    // This step was completed already
    return false;
  }
  return true;
};
