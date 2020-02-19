const clickThrough = id => {
  return new Promise((resolve, reject) =>
    setTimeout(function() {
      document.getElementById(id).click();
      resolve();
    }, 500)
  );
};

export const runInDebug = async () => {
  await clickThrough("ormron_street_npc_Olija");
  await clickThrough("dialogue0_line0");
  await clickThrough("dialogue1_line0");
  await clickThrough("dialogue1_line1");
  await clickThrough("dialogue1_line2");
  await clickThrough("dialogue1_line3");
  await clickThrough("dialogue2_line0");
  await clickThrough("ormron_street_npc_Dario");
  await clickThrough("dialogue3_line0");
  await clickThrough("dialogue4_line0");
  await clickThrough("dialogue4_line1");
  await clickThrough("street_to_arena");
  await clickThrough("select_party_button");
  await clickThrough("ormron_arena_npc_Dario1");
  await clickThrough("dialogue5_line0");
  await clickThrough("arena_to_street");
  await clickThrough("ormron_street_npc_Olija");
  await clickThrough("dialogue6_line0");
  await clickThrough("ormron_street_npc_Olija");
  await clickThrough("dialogue7_line0");
  await clickThrough("dialogue7_line1");
  await clickThrough("dialogue7_line2");
  await clickThrough("dialogue7_line3");
  await clickThrough("dialogue7_line4");
  await clickThrough("street_to_garden");
  await clickThrough("dialogue8_line0");
  await clickThrough("dialogue9_line0");
  await clickThrough("dialogue10_line0");
  await clickThrough("dialogue10_line1");
  await clickThrough("dialogue10_line2");
  await clickThrough("dialogue_option_1");
  await clickThrough("dialogue11_line0");
  await clickThrough("dialogue14_line0");
};
