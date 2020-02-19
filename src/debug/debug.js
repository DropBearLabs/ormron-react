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
};
