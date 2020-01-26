import { quests as allQuests } from "./data/Quests";
export const questCanBeUpdated = (currentQuests: any, toCheck: any) => {
  // console.log("questCanBeUpdated", currentQuests, toCheck);
  const steps = allQuests[toCheck[0]].steps.map((x: any) => x.event);
  const currentStep = toCheck[1];
  if (currentQuests[toCheck[0]] === undefined && currentStep === steps[0]) {
    // console.log("We re taking this quest");
    return true;
  }
  if (currentQuests.length === 0) {
    // console.log("Quest is not taken");
    return false;
  }
  const currentStepIndex = steps.indexOf(toCheck[1]);
  const prevStep = steps[currentStepIndex - 1];
  const currentQuestEvents = currentQuests[toCheck[0]];
  if (currentQuestEvents.indexOf(prevStep) === -1) {
    // console.log("Previous step wasn't completed");
    return false;
  }
  if (currentQuestEvents.indexOf(currentStep) !== -1) {
    // console.log("This step was completed already");
    return false;
  }
  return true;
};
