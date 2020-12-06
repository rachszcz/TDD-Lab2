describe('translate', function() {
    // Convert each word to lowercase before translating.
    it('convert word to lowercase', function() {
        expect(translate('BaNaNaS')).toEqual('ananasbay');
    });

    it('convert word to lowercase', function() {
        expect(translate('PEAR')).toEqual('earpay');
    });

    // If a word starts with a vowel, just add “way” onto the ending.
    it('word starting with a', function() {
        expect(translate('apple')).toEqual('appleway');
    });

    it('word starting with a', function() {
        expect(translate('apricot')).toEqual('apricotway');
    });

    it('word starting with a', function() {
        expect(translate('avocado')).toEqual('avocadoway');
    });

    // words that start with vowels with capital letters are converted to lowercase
    it('word starting with capital vowel', function() {
        expect(translate('Orange')).toEqual('orangeway');
    });

    it('word starting with capital vowel', function() {
        expect(translate('Elderberry')).toEqual('elderberryway');
    });

    // words that start with one consonant… write tests for the second letter being
    // several different vowels
    it('start with one consonant', function() {
        expect(translate('pineapple')).toEqual('ineapplepay');
    });

    it('start with one consonant', function() {
        expect(translate('raspberry')).toEqual('aspberryray');
    });

    // words that start with two consonants
    it('start with two consonants', function() {
        expect(translate('grape')).toEqual('apegray');
    });

    it('start with two consonants', function() {
        expect(translate('blueberry')).toEqual('ueberryblay');
    });

    // words that start with more (3+) consonants
    it('start with three consonants', function() {
        expect(translate('strawberry')).toEqual('awberrystray');
    });

    it('start with three consonants', function() {
        expect(translate('lychee')).toEqual('eelychay');
    });

    // null returns null
    it('null value', function() {
        expect(translate(null)).toEqual(null);
    });

});



