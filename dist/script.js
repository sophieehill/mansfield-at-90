function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#007bff',
			'#6610f2',
			'#6f42c1',
			'#343a40',
			'#490A3D',
			'#BD1550',
			'#9c5402',
			'#616e02',
			'#0e8299',
			'#16a085',
			'#077334',
			'#153759',
			'#a61b0c',
			'#7e21a3',
			'#a6211c',
			'#422024',
			'#036e5f',
			'#5d026b',
			'#7a0146'
		];

var quotes = [
    ["Besides being weaker than men's, women's bodies are made to attract and to please men.", "Harvey C. Mansfield", "Manliness (2006)"],
	["A person who makes a deal all the time is unmanly, just as economics is inherently unmanly because it always wants a trade-off.", "Harvey C. Mansfield", "Interview, Wall Street Journal (2018)"],
	["Anybody who says something which seems to be racism will find his career shortened, his reputation gone, and he will definitely not be listened to. But it's still supposed that the racial gap that remains between Blacks and whites and Asians on the other hand is a fault of America, of our society.", "Harvey C. Mansfield", "Interview, Independent Women's Forum (2020)"],
["The genuine feminist you might say, those who are really biologically women, are worried that the transgender folks will come and take away the privileges or the advantages that are afforded to women. For example, women sports. So transgender male who wants to be a woman can enter a woman's sport and win easily because he's really a male.", "Harvey C. Mansfield", "Interview, Independent Women's Forum (2020)"],
["Grade inflation got started in the late 60s and early 70s when professors raised the grades of students protesting the war in Vietnam. At that time, too, white professors, imbibing the spirit of the new policies of affirmative action, stopped giving low grades to black students, and to justify or conceal this, also stopped giving low grades to white  students.", "Harvey C. Mansfield", "Op-Ed, The Crimson (2001)"],
["When women drive cars and shoot guns, when everything conspires to equalize them with men, the fact that women remain weaker is all the more notable.", "Harvey C. Mansfield", "Manliness (2006)"],
["One has only to think of Jane Austen to be assured that women have a sense of humor, distributed in lesser quantities to lesser brains. Women do make jokes, only not so noticeably as men.", "Harvey C. Mansfield", "Manliness (2006)"],
["In the case of sexual promiscuity, the gender-neutral society by giving women an equal privilege makes it harder for them to say no, thus facilitating the aggressive fantasies of males and aggravating the sex difference in that regard.", "Harvey C. Mansfield", "Manliness (2006)"],
["Women are more likely to want to nurture, as shown in studies confirming that girls like dolls and boys like cars and guns.", "Harvey C. Mansfield", "Manliness (2006)"],
["When men do think about marital bliss, they focus on lots of sex rather than the mere kissing and hugging that women prefer.", "Harvey C. Mansfield", "Manliness (2006)"],
["To resist rape a woman needs more than martial arts and more than the police; she needs a certain ladylike modesty enabling her to take offense at unwanted encroachment.", "Harvey C. Mansfield", "Manliness (2006)"],
["Do women become shrill when they assert themselves and thus fail to impress others with their authority? In my experience it is difficult for a man who is attracted to a woman not to find her cute, rather than intimidating, when she gets angry.", "Harvey C. Mansfield", "Manliness (2006)"],
["For some feminists, we shall see, the refashioning goes very far; they believe that gender neutrality can be achieved only if women are as sexually free as the most adventurous men.", "Harvey C. Mansfield", "Manliness (2006)"],
["Sexual harassment has existed ever since predatory males have been around, and until now it has been contained by the code of a gentleman.", "Harvey C. Mansfield", "Manliness (2006)"],
["No men of our time had the nerve to make fun of the feminists as men did of the suffragettes a century ago.", "Harvey C. Mansfield", "Manliness (2006)"],
["In going to work, women have not deserted the home and most of them show a secret liking for housework.", "Harvey C. Mansfield", "Manliness (2006)"],
["Even more pronounced than women's penchant for nesting is their desire to take loving care of the babies to be reared in the nest. They take nature's pleasure in giving milk, and they generally enjoy greater intimacy with their babies than do men.", "Harvey C. Mansfield", "Manliness (2006)"],
["Women still rather like housework, changing diapers, and manly men.", "Harvey C. Mansfield", "Manliness (2006)"],
["Despite the laws, the customs, and the morals that we live under, it is still a considerable fact that almost any man can beat up almost any woman.", "Harvey C. Mansfield", "Manliness (2006)"],
["We will not ignore the fact, as do the scientists who study sex differences, that the best thinkers, the philosophers, have been almost exclusively male.", "Harvey C. Mansfield", "Manliness (2006)"],
["Men can spit, cuss, tell dirty jokes, read porn, and drink beer. Modern women are doing their best to catch up with men in these attainments, and they do seem to have made modest progress in cussing, I say condescendingly. But they remain way behind men in natural, easy-going, effortless vulgarity.", "Harvey C. Mansfield", "Manliness (2006)"],
["But though being a sex object is oppressive, it seems to be more natural for a woman than a man.", "Harvey C. Mansfield", "Manliness (2006)"],
["Let's return to the question of women's leaning on men for their ideas. Beauvoir is an intelligent writer who merits our careful attention, but she is not a great thinker, and she leans on great thinkers, who were males.", "Harvey C. Mansfield", "Manliness (2006)"],
["As with Beauvoir, the radical feminists want to annul the passivity of the female and to avoid the condition of sex object. Sex they would do dutifully for the sake of the whole movement, perhaps, but as women they show themselves to be very unerotic.", "Harvey C. Mansfield", "Manliness (2006)"],
["It seems to me that the gay person is unconventional. He isn't like other people entirely — and it's also a difference that is a misfortune. Not so much a moral wrong, but not to be able to live on intimate terms with the opposite sex and endeavor to be a parent or a good parent is a misfortune.", "Harvey C. Mansfield", "Interview, The Point Mag (2012)"],
["The conservative view is that those who have children take on a great responsibility in raising the next generation. Gays don't do it. So it's a satisfaction that they are missing in their lives. No, it's not the worst thing in the world to be gay, far from it, there are many worse misfortunes. But it isn't a life one would choose.", "Harvey C. Mansfield", "Interview, The Point Mag (2012)"],
["[On adoption rights for same-sex couples] Well … then the question is whether that's good for the children.", "Harvey C. Mansfield", "Interview, The Point Mag (2012)"],
["One of the worst things you see is how white boys are treated in elementary, junior highs and high schools these days.", "Harvey C. Mansfield", "Interview, The Point Mag (2012)"],
["Disapproval of gays is not like racial or gender discrimination; there is nothing wrong with being black or being a woman, but it is perfectly reasonable to think there is something wrong with being gay.", "Harvey C. Mansfield", "Testimony in Evans v. Romer, reported in The New Republic (1993)"],
["I had a conversation with a gay student once. Being gay is not a life that makes for happiness.", "Harvey C. Mansfield", "Testimony in Evans v. Romer, reported in The New Republic (1993)"],
["[On affirmative action at Harvard]  ... the appointment would go forward if the candidate were a woman or a member of a minority, and would not go forward if it were a white or perhaps yellow male.", "Harvey C. Mansfield", "Comments in Harvard Faculty Meeting (based on Manfield's own recollection) (1981)"],
["Grade inflation got started in the late 60s and early 70s when professors raised the grades of students protesting the war in Vietnam. At that time, too, white professors, imbibing the spirit of the new policies of affirmative action, stopped giving low grades to black students, and to justify or conceal this, also stopped giving low grades to white students.", "Harvey C. Mansfield", "Op-Ed, The Crimson (2001)"],
["I think the so-called rape culture that people talk about now is a consequence of sexual liberation.", "Harvey C. Mansfield", "Interview, Boston Magazine (2017)"],
["Are most men really potential rapists as the term 'rape culture' suggests, or are some of them merely taking what is offered?", "Harvey C. Mansfield", "Op-Ed, The Washington Examiner (2014)"],
["It certainly seems strange that being capable of rape can make a person better qualified for greatness, but it's probably true.", "Harvey C. Mansfield", "Op-Ed, The Washington Examiner (2011)"],
["Being sensitive to blacks and women gave them the right to be offended when they pleased and to talk back offensively to their tormentors.", "Harvey C. Mansfield", "Op-Ed, The Washington Examiner (2005)"],
["Propriety is stronger than the law because it is enforced with shame, not prison. Propriety, more than sexual harassment law, perhaps more than diamonds, is a girl's best friend.", "Harvey C. Mansfield", "Op-Ed, The Washington Examiner (1999)"],
["What about a professor who had honorable intentions, if he could use that old-fashioned phrase, toward a student; honorable intentions in which a sexual advance was not the sole aim, but was not entirely ruled out? What about that case?", "Harvey C. Mansfield", "Comments in Harvard Faculty Meeting (based on Manfield's own recollection) (1995)"],
["Homosexuality is an open challenge to society's sense of shame, as the gays recognize quite well. For if the practices of homosexuals are not shameful, what is?", "Harvey C. Mansfield", "Op-Ed, The Crimson (1993)"],
["Of course, feminism did not create male irresponsibility, and it is not the only cause that Dad is so often no longer around. But it gave him a license to take off.", "Harvey C. Mansfield", "Article, The Women's Quarterly (1998)"],
["The sensitive male is a pathetic weakling because his sensitivity is at odds with his maleness.", "Harvey C. Mansfield", "Article, The Women's Quarterly (1998)"],
["Somehow men, for all  their faults, are still handy to have around. A deep voice, a manly calm, an occasional frown can have an effect that no amount of help with the housework can achieve.", "Harvey C. Mansfield", "Article, The Women's Quarterly (1998)"],
["It is women who have deprived themselves of dads. Or, better to say, feminist women have done this.", "Harvey C. Mansfield", "Article, The Women's Quarterly (1998)"],
["To a woman, home is where your husband lives and where your children learn.", "Harvey C. Mansfield", "Article, Imprimis (2006)"],
["To be the manager of a home is the moderate and attainable ambition of most women; it is the place where they find honor and joy.", "Harvey C. Mansfield", "Article, Imprimis (2006)"],
["Above all, women, Republican women believe in feminine modesty and Democratic women if they practice it, do not believe in it.", "Harvey C. Mansfield", "Talk at University of Chicago Law School, hosted by the Law School Republicans and the Federalist Society (2015)"],
["Because rape is a crime virtually always committed by men using their physical strength, when women seek to tempt men into unwanted sexual acts, they have to use means other than the physical: they resort to a seduction that becomes an indirect, non-violent, and non-criminal means of coercion—a stealth counterpart, but not equivalent, of rape.", "Harvey C. Mansfield", "Op-Ed, The Crimson (2003)"],
["Rape is a cruel fact that casts doubt on the equality of the sexes.", "Harvey C. Mansfield", "Op-Ed, The Crimson (2003)"],
["Almost anything goes so long as the woman consents. One exception to this is that faculty are not allowed to fool around with undergraduates.", "Harvey C. Mansfield", "Op-Ed, The Crimson (2003)"],
["Is more sex more fun? Perhaps, but it is a man's game that women today insist on playing. Women are giving out many more free samples than they used to.", "Harvey C. Mansfield", "Op-Ed, The Crimson (2003)"],
["Since innocence is gone, the only remaining barrier to cross is the consent of the other party, but since both are liberated, why should that be withheld? No wonder, then, that freer sex has produced more rape, just as the prudes would have predicted.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["The main difficulty in pornography now is to re-create Victorian conventions so as to have something inhibiting to violate.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["The ideal of polymorphous perversity - that is, sex uninhibited by any notion of the shameful or of what is fitting - has received a rude shock from the emergence of AIDS.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["Gone, or at least forgotten, are the feminine qualities of loyalty, tenderness, loving, mothering, and sexiness - all of which presuppose a certain withdrawal from petty career ambition.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["Only women can undo what women have done to create sensitive males. At present manliness is allowed only to black males, but in such exaggerated form as to make it look ridiculous.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["The psychedelic nonsense of the drug culture, more or less harmless for the upper middle class, was transmitted to fatherless youths in the black ghettos.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["Not only is crime more frequent among blacks, but for many of them it also has become, through the indulgence of whites, their specialty - or, in sixties lingo, their identity. Crime makes blacks threateningly, hence thrillingly different.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["Environmentalism is school prayer for liberals.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["In our time rock has descended still further to rap, consisting of stupid rhymes and foul words without a tune. While rock is mainly white, rap is a special contribution of blacks to American cultural degeneration. ", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["Beside rock, even pornography looks elegant, but what a contrast with the popular songs of the thirties at their best, say, in Cole Porter: romantic, allusive, subtle, witty, and tuneful!", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["Rock music glorifies sex to adolescent children who are not ready for it in any way except physically. The words of the songs say what the cavorting performers indicate, both with the crudeness necessary for maximum explicitness. The deafening loudness of the music signifies a demand for total absorption and the exclusion of adults and their authority.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["But there was a special contribution from the acolytes of the late sixties, which was to insist that the poor should not feel embarrassed about going on the dole. The work of debasing the morality of the poor was the special office of young lawyers and social workers who helped the poor overcome their inhibitions against signing up for benefits.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["No one except relatives of the players watches female sports because the athletes are not as good as males. People do watch women in sports such as gymnastics, in which the activities reveal a particularly feminine grace as opposed to doing the same thing as men less well.", "Harvey C. Mansfield", "The Legacy of the Late Sixties (1997)"],
["Thus it is wrong to accuse President Bush of acting illegally in the surveillance of possible enemies, as if that were a crime and legality is all that matters. This is simplistic, small-r republican thinking of the kind that our Constitution surpassed when it constructed a strong executive.", "Harvey C. Mansfield", "Op-Ed in the Weekly Standard (2006)"],
["Much present-day thinking puts civil liberties and the rule of law to the fore and forgets to consider emergencies when liberties are dangerous and law does not apply.", "Harvey C. Mansfield", "Op-Ed in the Weekly Standard (2006)"],
["We live in a society where racism is not, and cannot be, openly professed. To do so not only is frowned upon but will get you into serious trouble, if not yet jail, in America. Yet even though this is impossible to miss and known to all, 'systemic racism' supposedly persists.", "Harvey C. Mansfield", "Op-Ed in the Wall Street Journal (2020)"],
["The notion of systemic racism is designed to make you feel guilty about this if you are white. But why should you? The system did it, not you. You can't change the system; that's what 'systemic' means.", "Harvey C. Mansfield", "Op-Ed in the Wall Street Journal (2020)"],
["To prove that women can do everything men do, the most logical feminists find it necessary to practice their excesses, or at least boast of them—announcing with satisfaction that the murder rate by women is rising or discovering that rape is a gender-neutral crime that women too have the force and malice to commit.", "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["Since a woman can no longer count on the support of her husband - having dispensed with it - she needs to be able to call the police in case of trouble or a social agency in case of penury or a lawyer in case of discrimination.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["The new-old essence of women is vulnerability. Their exciting new sense of risk must be made riskless, their sexual adventures free of misadventure, their newly-acquired manliness given the support of a wife.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["The trouble with feminist imitation-manliness is that, unlike men, feminist women have no wives.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["Lesbianism is one solution for the problem of gaining support without losing independence, but an imperfect one - particularly now that it lacks the thrill of outlaw behavior.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["Being equal to men, the young woman has like them the right to free sex in a friendly environment (which among other things means one that does not frown on extra-marital sex), and being unequal to men, she needs protection unlike them so that she can say no at any stage.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["But in the universities a woman has the right to initiate an encounter as a man might do but then suddenly to call a halt at any point, as a man is unlikely to do. She can also regret the matter at the instant or later, and demand intervention of authority on her behalf, also unlikely in a man. In such cases she can report the man involved and accuse him of misconduct without fearing that he could or would accuse her of trifling with or frustrating his desire.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["The OCR wants to give women the normal right of a man to pursue sex—that makes them equal to men—but also keep for them the normal right of a woman to say no to pleasure when a man would think, why not?",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["Most women do not wish to give out sex for free, though some do. The latter, one suspects, are for the most part feminists, who feel impelled to take the initiative away from men as the expression of their equality with men.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["Most college women are still nice girls almost all the time.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["[Women] want the right to be wayward but not the expectation that sex is the normal end of an evening out.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["That is why these regulations do not merely control sexual misconduct but also actually look forward to its abolition, as if that were possible and attainable as well as desirable.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["On top of this, colleges must deal respectably with newly clamorous same-sexers who are not satisfied with the opposite sex and insist on devising new identities for themselves and others.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["Feminists are not wrong to think that rape is a danger and a terrible harm. But they increase the risk of rape by encouraging women to prove themselves equal by rushing into casual sex with men they do not know.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["If only there were a better feminism with a touch of romance, a measure of allure, something to dance to.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2014)"],
["Just as Gender Studies taints the whole university with its sexless fantasies, so economists infect their neighbors with the imitation science they peddle.",  "Harvey C. Mansfield", "Article published in Defining Ideas, a Hoover Institution journal (2011)"],
["[Feminists] bought into the sexual revolution and decided that women could best show they are equal to men by becoming as predatory as the most wolfish men. This demonstration required the fallback assistance of ready abortion in case something should go wrong; and it gave new legitimacy to - this word is never used - spinsterhood. ",  "Harvey C. Mansfield", "Op-Ed in Forbes (2008)"],
["If you loved a man, you might actually want to put up with, or even admire, his ways. You may be sure that I am not the first one to notice that feminist women are unerotic.", "Harvey C. Mansfield", "Op-Ed in Forbes (2008)"],
["Sarah Palin was appealing and accomplished, with the force of a man and the grace of a woman.", "Harvey C. Mansfield", "Op-Ed in Forbes (2008)"],
["[Sarah Palin] introduced her children, especially little Trig, the one with Down's syndrome. She was displaying a mother's unconditional love, as opposed to the conditional love that insists on a 'wanted' child.", "Harvey C. Mansfield", "Op-Ed in Forbes (2008)"],
["In love, a professor cuts a more acceptable figure, as the legion of former students, now faculty wives, must testify; for his characteristic didactic manner is closer to wheedling than to scolding.", "Harvey C. Mansfield", "Book Review published in Polity (1972)"],
["In the age of sexual liberation, every woman not protected by poverty and extreme old age needs the courage to defend her virtue.", "Harvey C. Mansfield", "Is Courage a Masculine Virtue? (2009)"],
["There have been a few female suicide bombers among the Islamic terrorists, young and either deluded or conscripted, but it's safe to suppose that if women were the leaders of Islamic radicalism they would go in for raising consciousness rather than terrorism.", "Harvey C. Mansfield", "Is Courage a Masculine Virtue? (2009)"],
["Men have been utterly unwilling and unable to defend the oppressive privileges feminism denounced, thus justifying their elimination. Males have shown themselves to be a corrupt aristocracy, nothing more than a bunch of wimps, who surrender without a protest, much less a fight.", "Harvey C. Mansfield", "Book Review published in Policy Review (1987)"],
["The feminists' first complaint against men was that they were Male Chauvinist Pigs. This did not mean that they were messy creatures, but that they were greedy pigs hogging all the good things in life for themselves. In other words, it's  better to be a man.", "Harvey C. Mansfield", "The Partial Eclipse of Manliness (1998)"],
["The result of gender neutrality is to justify women in more extreme partisanship for their sex than they ever encountered in faltering male chauvinism. It is also to encourage them in the game of charmless, loveless sex that feminists offer in place of romance. The change we need is to rediscover our sexes and to make both of them more assertive of their differences, so that their attraction to each other becomes more interesting (and more fruitful) than under the grim domination of feminism.", "Harvey C. Mansfield", "Essay published in the Wall Street Journal (2014)"]
	];


var currentQuote = "";
var currentAuthor = "";
var currentSource = "";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    currentAuthor = quotes[randomquote][1];
	currentSource = quotes[randomquote][2];

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('.social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
		$('#newquote').animate({ color: colors[randomcolor] }, 500);
		$('#faq').animate({ color: colors[randomcolor] }, 500);		
		$('blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quoteauthor').animate({ opacity: 0 }, 200, function () {
	        $(this).animate({ opacity: 1 }, 200);
	        $(this).text(currentAuthor);
	    });
		$('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentSource);
	    });
    });    
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);
});