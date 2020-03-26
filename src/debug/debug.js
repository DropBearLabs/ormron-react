const clickThrough = id => {
  console.log(id);
  return new Promise((resolve, reject) =>
    setTimeout(function() {
      document.getElementById(id).click();
      resolve();
    }, 600)
  );
};

const passDialogue = async linesIds => {
  for (const l of linesIds) {
    await clickThrough(l);
  }
};

export const runInDebugAll = async () => {
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
    "dialogue15_line0",
    "dialogue15_line1",
    "dialogue16_line0",
    "dialogue17_line0",
    "dialogue17_line1",
    "dialogue18_line0",
    "dialogue19_line0"
  ]);

  await clickThrough("ormron_garden_char_Tara");
  await passDialogue([
    "dialogue20_line0",
    "dialogue21_line0",
    "dialogue22_line0",
    "dialogue23_line0",
    "dialogue24_line0",
    "dialogue_option_1",
    "dialogue26_line0",
    "dialogue28_line0",
    "dialogue28_line1",
    "dialogue32_line0",
    "dialogue31_line0"
  ]);

  await clickThrough("ormron_garden_npc_AmuletGirl");
  await passDialogue([
    "dialogue33_line0",
    "dialogue34_line0",
    "dialogue35_line0",
    "dialogue35_line1",
    "dialogue35_line2",
    "dialogue_option_1",
    "dialogue36_line0",
    "dialogue38_line0",
  ]);

  await clickThrough("garden_to_gazebo");
  await passDialogue([
    "dialogue45_line0",
    "dialogue46_line0",
    "dialogue48_line0",
    "dialogue48_line1",
    "dialogue49_line0",
    "dialogue50_line0",
    "dialogue_option_2",
    "dialogue56_line0"
  ]);

  await clickThrough("ormron_gazebo_char_Grey");
  await passDialogue([
    "dialogue57_line0",
    "dialogue58_line0",
    "dialogue59_line0",
    "dialogue_option_2",
    "dialogue63_line0",
    "dialogue64_line0",
    "dialogue65_line0",
    "dialogue66_line0",
    "dialogue67_line0",
    "dialogue68_line0",
    "dialogue69_line0",
    "dialogue71_line0",
    "dialogue74_line0",
    "dialogue75_line0",
    "dialogue76_line0",
    "dialogue77_line0",
    "dialogue79_line0",
    'dialogue83_line0'
  ]);

  await clickThrough("ormron_gazebo_npc_SchoolGirl");
  await passDialogue([
    "dialogue40_line0",
    "dialogue41_line0",
    "dialogue42_line0",
    "dialogue42_line1",
    "dialogue42_line2",
    "dialogue43_line0",
    "dialogue44_line0"
  ]);
};

export const runInDebugNell = async () => {
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
    "dialogue15_line0",
    "dialogue15_line1",
    "dialogue16_line0",
    "dialogue17_line0",
    "dialogue17_line1",
    "dialogue18_line0",
    "dialogue19_line0"
  ]);

  await clickThrough("ormron_garden_char_Tara");
  await passDialogue([
    "dialogue20_line0",
    "dialogue21_line0",
    "dialogue22_line0",
    "dialogue23_line0",
    "dialogue24_line0",
    "dialogue_option_2",
    "dialogue27_line0",
  ]);

  await clickThrough("garden_to_gazebo");
  await passDialogue([
    "dialogue45_line0",
    "dialogue47_line0",
    "dialogue51_line0",
    "dialogue52_line0",
    "dialogue53_line0",
  ]);
  await clickThrough("ormron_gazebo_char_Grey");
  await passDialogue([
    "dialogue57_line0",
    "dialogue58_line0",
    "dialogue59_line0",
    "dialogue_option_2",
    "dialogue63_line0",
    "dialogue64_line0",
    "dialogue65_line0",
    "dialogue66_line0",
    "dialogue67_line0",
    "dialogue68_line0",
    "dialogue70_line0",
    "dialogue73_line0",
    "dialogue80_line0",
    "dialogue83_line0"
  ]);
};

export const runInDebugTara = async () => {
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
    "dialogue_option_2",
    "dialogue12_line0",
    "dialogue12_line1",
    "dialogue13_line0",
  ]);

  await clickThrough("ormron_garden_char_Tara");
  await passDialogue([
    "dialogue20_line0",
    "dialogue21_line0",
    "dialogue22_line0",
    "dialogue23_line0",
    "dialogue24_line0",
    "dialogue_option_1",
    "dialogue26_line0",
    "dialogue29_line0",
    "dialogue30_line0",
    "dialogue31_line0"
  ]);


  await clickThrough("garden_to_gazebo");
  await passDialogue([
    "dialogue45_line0",
    "dialogue46_line0",
    "dialogue48_line0",
    "dialogue48_line1",
    "dialogue49_line0",
    "dialogue_option_2",
    "dialogue56_line0",
  ]);

  await clickThrough("ormron_gazebo_char_Grey");
  await passDialogue([
    "dialogue57_line0",
    "dialogue58_line0",
    "dialogue59_line0",
    "dialogue60_line0",
    "dialogue_option_1",
    "dialogue61_line0",
    "dialogue62_line0"
  ]);
};

export const runInDebugGrey = async () => {
  await clickThrough("ormron_street_npc_Olija");
  await passDialogue([
    "dialogue0_line0",
    "dialogue1_line0",
    "dialogue1_line1",
    "dialogue1_line2",
    "dialogue1_line3",
    "dialogue2_line0",
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
    "dialogue_option_2",
    "dialogue12_line0",
    "dialogue12_line1",
    "dialogue13_line0",
  ]);

  await clickThrough("ormron_garden_char_Tara");
  await passDialogue([
    "dialogue20_line0",
    "dialogue21_line0",
    "dialogue22_line0",
    "dialogue23_line0",
    "dialogue24_line0",
    "dialogue_option_2",
    "dialogue27_line0",
  ]);

  await clickThrough("garden_to_gazebo");
  await passDialogue([
    "dialogue45_line0",
    "dialogue47_line0",
    "dialogue54_line0"
  ]);

  await clickThrough("ormron_gazebo_char_Grey");
  await passDialogue([
    "dialogue57_line0",
    "dialogue58_line0",
    "dialogue59_line0",
    "dialogue_option_2",
    "dialogue63_line0",
    "dialogue64_line0",
    "dialogue65_line0",
    "dialogue66_line0",
    "dialogue68_line0",
    "dialogue70_line0",
    "dialogue84_line0",
    "dialogue81_line0",
    "dialogue82_line0",
    "dialogue83_line0"
  ]);
};