const clickThrough = id => {
  console.log(id);
  return new Promise((resolve, reject) =>
    setTimeout(function() {
      document.getElementById(id).click();
      resolve();
    }, 1000)
  );
};

const passDialogue = async linesIds => {
  for (const l of linesIds) {
    await clickThrough(l);
  }
};

export const runInDebug = async () => {
  await clickThrough("ormron_street_npc_Olija");
  await passDialogue([
    "dialogue0_line0",
    "dialogue1_line0",
    "dialogue1_line1",
    "dialogue1_line2",
    "dialogue1_line3",
    "dialogue2_line0"
  ]);
  await clickThrough("ormron_street_npc_Dario");
  await passDialogue(["dialogue3_line0", "dialogue4_line0", "dialogue4_line1"]);

  await clickThrough("street_to_arena");
  await clickThrough("select_party_button");

  await clickThrough("ormron_arena_npc_Dario1");
  await passDialogue(["dialogue5_line0"]);
  await clickThrough("arena_to_street");

  await clickThrough("ormron_street_npc_Olija");
  await passDialogue(["dialogue6_line0"]);
  await clickThrough("ormron_street_npc_Olija");
  await passDialogue([
    "dialogue7_line0",
    "dialogue7_line1",
    "dialogue7_line2",
    "dialogue7_line3",
    "dialogue7_line4"
  ]);

  await clickThrough("street_to_garden");
  await passDialogue([
    "dialogue8_line0",
    "dialogue9_line0",
    "dialogue10_line0",
    "dialogue10_line1",
    "dialogue10_line2",
    "dialogue_option_1",
    "dialogue11_line0",
    "dialogue14_line0",
    "dialogue15_line0"
    // "dialogue16_line0",
    // "dialogue17_line0",
    // "dialogue17_line1",
    // "dialogue18_line0",
    // "dialogue19_line0"
  ]);
};
