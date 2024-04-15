() => {
  cy.contains('3 random audios');
  cy.get('audio').should($audios => {
    expect($audios).to.have.length(3);
    $audios.each((index, audio) => {
      expect(audio).to.have.attr('controls');
      expect(audio.src).to.be.oneOf([
        'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
        'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
        'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
      ]);
    });
  });
}

