describe('05 const unknownStudentNames', () => {

  const unknownStudentNames = find.__get__('unknownStudentNames');

  it('should find 10 unknown students names', () => {
    const names = unknownStudentNames.join('');
    expect(names).to.equal('!findthebestrevenge!');
  });

});
