/*

            regex_top_
        r ___________  \r
       e /           \  \i
      g /             \  \g
     e /               \  \h
    x /                 \  \t
    _ \                 /  /t
     l \               /  /h
      e \             /  /g
       f \           /  /i
        t \_________/  /r
           regex_down_/

*/


module.exports = {
regex_left: [
/I*.*NI.*[SL]/,
/.{3}[THI]I/,
/A*B.{4}X*/,
/Z*X.*/,
/.*[G].*Y.*/,
/K+.*[G].*/,
/.*T+YA.*/,
/.*C[^YTA]*.{1}/,
/.*/,
],
regex_top_right: [
/[NIL]...Q/,
/.PU.V./,
/.*Q.F.T.+B/,
/.[TYL]RP...C/,
/.HJ.O.(BY|AZ).*/,
/.I.B.K./,
/F.{2}(EQ|RT).*/,
/.D.T./,
].reverse(),
regex_down_right: [
/.*/,
/.*N.*V{2}.*/,
/I*S.*IB/,
/.*Z.*V.*X.*V/,
/.*[GL]*.*/,
/.*L.*K.*N.*G./,
/.*[YI].*/,
/O.*S+/,
]
}
