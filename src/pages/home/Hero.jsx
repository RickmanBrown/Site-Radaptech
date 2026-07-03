import { useState, useEffect } from 'react';

function Hero() {
  const words = ["organização.", "produtividade.", "inovação.", "segurança."];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-40 pb-16 lg:px-10"
    >
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <h1 className="mt-8 max-w-6xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-7xl min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex flex-col justify-center">
          <span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
              Sistemas inteligentes
            </span>{" "}
            para empresas que querem crescer com{" "}
            <br className="hidden md:block" />
            <span className="text-cyan-300">
              {text}
              <span className="animate-pulse opacity-70">|</span>
            </span>
          </span>
        </h1>

        <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg">
          A RadapTech desenvolve{" "}
          <span className="font-semibold text-cyan-300">
            sistemas personalizados
          </span>
          , sites e{" "}
          <span className="font-semibold text-blue-300">
            soluções digitais
          </span>{" "}
          para empresas, microempreendedores e negócios que precisam
          modernizar processos, reduzir tarefas manuais e ganhar{" "}
          <span className="font-semibold text-cyan-300">
            produtividade
          </span>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:Radaptech@gmail.com"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-bold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.18)] transition hover:scale-[1.02] hover:from-cyan-300 hover:to-blue-400"
          >
            Solicitar orçamento
          </a>

          <a
            href="#servicos"
            className="rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 font-bold text-white transition hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-300"
          >
            Ver serviços
          </a>
        </div>
        <div className="mt-28 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

            <div className="relative">
              <strong className="block text-2xl text-cyan-300">
                Web
              </strong>

              <span className="mt-2 block text-sm text-slate-400">
                Sistemas online personalizados para qualquer tipo de negócio.
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

            <div className="relative">
              <strong className="block text-2xl text-cyan-300">
                EPI
              </strong>

              <span className="mt-2 block text-sm text-slate-400">
                Controle de estoque, entregas, colaboradores e validade de EPIs.
              </span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition group-hover:opacity-100" />

            <div className="relative">
              <strong className="block text-2xl text-cyan-300">
                Sob medida
              </strong>

              <span className="mt-2 block text-sm text-slate-400">
                Desenvolvemos soluções exclusivas para a realidade da sua empresa.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;