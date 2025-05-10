export default function Footer() {
  const simdi = new Date().getHours();
  const aciliszamani = 7;
  const kapanmazamani = 23;
  const isopen = simdi >= aciliszamani && simdi <= kapanmazamani;
  console.log(isopen);

  return (
  <footer>
    {
        isopen ?(
            <p>
            Axsam {kapanmazamani}-da kapanıyoruz. <br />
            <span role="img" aria-label="happy">😊</span>
            </p>
        ):(
            <p>
            Sabah {aciliszamani}-da açılırıq. <br />
            <span role="img" aria-label="sad">😢</span>
            </p>
        )
    }
  </footer>
  );
}
