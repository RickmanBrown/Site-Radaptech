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
      className="relative flex min-h-screen items-center justify-center bg-neutral-950 px-6 pb-16 pt-32 font-sans lg:px-12"
    >
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <h1 className="mt-8 flex min-h-[120px] max-w-5xl flex-col justify-center text-4xl font-light leading-[1.1] tracking-tight text-white sm:min-h-[140px] sm:text-5xl lg:min-h-[160px] lg:text-7xl">
          <span>
            <span className="text-white">
              Sistemas inteligentes
            </span>{" "}
            para empresas que querem crescer com{" "}
            <br className="hidden md:block" />
            <span className="text-blue-500 font-normal">
              {text}
              <span className="animate-pulse opacity-50">|</span>
            </span>
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
          A RadapTech desenvolve{" "}
          <span className="text-blue-500 font-normal">
            sistemas personalizados
          </span>
          , sites e{" "}
          <span className="text-blue-500 font-normal">
            soluções digitais
          </span>{" "}
          para empresas, microempreendedores e negócios que precisam modernizar processos, reduzir tarefas manuais e ganhar{" "}
          <span className="text-blue-500 font-normal">
            produtividade
          </span>.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:radaptech@gmail.com"
            className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Solicitar orçamento
          </a>

          <a
            href="#servicos"
            className="rounded-full border border-neutral-800 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-900"
          >
            Ver serviços
          </a>
        </div>

        <div className="mt-28 grid w-full max-w-5xl grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          
          <div className="group border-t border-neutral-900 pt-6 text-left transition-colors hover:border-neutral-600">
            <strong className="block text-xl font-normal text-white">
              Web
            </strong>
            <span className="mt-3 block text-sm font-light leading-relaxed text-neutral-400">
              Sistemas online personalizados para qualquer tipo de negócio.
            </span>
          </div>

          <div className="group border-t border-neutral-900 pt-6 text-left transition-colors hover:border-neutral-600">
            <strong className="block text-xl font-normal text-white">
              EPI
            </strong>
            <span className="mt-3 block text-sm font-light leading-relaxed text-neutral-400">
              Controle de estoque, entregas, colaboradores e validade de EPIs.
            </span>
          </div>

          <div className="group border-t border-neutral-900 pt-6 text-left transition-colors hover:border-neutral-600">
            <strong className="block text-xl font-normal text-white">
              Sob medida
            </strong>
            <span className="mt-3 block text-sm font-light leading-relaxed text-neutral-400">
              Desenvolvemos soluções exclusivas para a realidade da sua empresa.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;