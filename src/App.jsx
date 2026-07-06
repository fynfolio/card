import { useState } from "react";

const VERIFY_API =
  "https://content-api.yuvrajthakur30.workers.dev/verify-date";

const CONTENT_API =
  "https://content-api.yuvrajthakur30.workers.dev/content";

const cards = [
  {
    id: "our-beginning",
    number: "01",
    title: "The Day We Became Us",
    subtitle: "Where our little story officially began.",
    buttonName: "Reveal Our Beginning",
    content: (
      <>
        <p className="text-xl font-semibold text-rose-950">
          13 September 2023 ❤️
        </p>

        <p>
          Maybe it looked like just another day to the rest of the world.
        </p>

        <p>
          But for me, it became the beginning of something I never want to
          forget.
        </p>

        <p className="font-medium text-rose-800">
          The day there was finally an "us".
        </p>
      </>
    ),
  },

  {
    id: "before-everything",
    number: "02",
    title: "Before Everything Got Complicated",
    subtitle: "Do you remember how simple we once were?",
    buttonName: "Remember Us",
    content: (
      <>
        <p>
          Before the arguments. Before the misunderstandings. Before we both
          became tired.
        </p>

        <p>
          There was a version of us that could talk about absolutely nothing
          and somehow make it feel like everything. I literally miss you a lot and I have no other way to express what I feel.
          We were just perfect before everything got complicated. I am responsible for this and I know whatever we have shared till now was the best
        </p>

        <p>
          Random conversations. Stupid jokes. Smiles that needed no
          explanation. Thoughts that needed no words.
        </p>

        <p className="font-medium text-rose-800">
          I miss us jaana !! The two of us.
        </p>
      </>
    ),
  },

  {
    id: "what-i-love",
    number: "03",
    title: "Things I Still Notice",
    subtitle: "The little pieces of you that stayed with me.",
    buttonName: "Reveal What I Notice",
    content: (
      <>
        <p>
          Your smile. Your madness. The tiny changes in your voice when
          something is wrong. The way you expressed your excitement. The way you trusted me.
        </p>

        <p>
          The things that make you happy. The things that used to annoy you. The parts
          of you that you probably think nobody pays attention to. The way you used to talk to me. The way you used to express your emotions.
        </p>

        <p className="font-medium text-rose-800">
          I noticed. I still remember. I wish I could go back there and relive those moments.
        </p>
      </>
    ),
  },

  {
    id: "our-memories",
    number: "04",
    title: "The Memories I Keep",
    subtitle: "Some moments quietly become part of you.",
    buttonName: "Open Our Memories",
    content: (
      <>
        <p>
          There are moments with you that randomly come back to me.
        </p>

        <p>
          A conversation. A laugh. A place. A song. Sometimes just the way you
          looked at me, shouted at me, or the way you used to hold my hand. The way
          you used to fight with me for getting late, for not being on time or 
          for saying something stupid.
        </p>

        <p>
          I don't sit and deliberately search for them.
        </p>

        <p className="font-medium text-rose-800">
          They just find me. My heart just finds us everytime.
        </p>
      </>
    ),
  },

  {
    id: "not-perfect",
    number: "05",
    title: "I Know We Weren't Perfect",
    subtitle: "This isn't me pretending nothing went wrong.",
    buttonName: "Read My Honesty",
    content: (
      <>
        <p>
          I know love doesn't erase hurt.
        </p>

        <p>
          I know there were moments when I could have understood you better,
          listened better, or simply reacted differently. I wished I could go back and 
          change everything that happened between us. I wish you accept this apology
          and we go back to how we were before everything got complicated.
        </p>

        <p>
          I'm not asking you to forget the difficult parts of us. I am just asking to 
          give me a chance to make it up to you. I will try my best to make you happy.
         I will make sure change everything that happened between us.
        </p>

        <p className="font-medium text-rose-800">
          I just don't want our difficult moments to erase every beautiful one. Let's create some more beautiful memories together
          and slowly erase the memories that are not so beautiful.
        </p>
      </>
    ),
  },

  {
    id: "same-room",
    number: "06",
    title: "If We Were In The Same Room",
    subtitle: "There are things a screen cannot say properly.",
    buttonName: "Imagine One Conversation",
    content: (
      <>
        <p>
          I don't think I would begin with a speech.
        </p>

        <p>
          I wouldn't try to prove that I was right. I wouldn't ask you to
          pretend everything is okay.
        </p>

        <p>
          Maybe I would just sit there, look at you, and finally listen without
          preparing my next answer.
        </p>

        <p className="font-medium text-rose-800">
          Just you. Just me. One conversation. One last chance to be together.
        </p>
      </>
    ),
  },

  {
    id: "what-i-miss",
    number: "07",
    title: "What I Actually Miss",
    subtitle: "It's not one memory or one moment.",
    buttonName: "Reveal What I Miss",
    content: (
      <>
        <p>
          I miss being able to tell you something random without thinking
          twice.
        </p>

        <p>
          I miss the comfort. The familiarity. The feeling that somewhere in
          this huge world, there was one person who knew my weird little
          universe. I miss you so much jaana. I miss your smile and presence in my life.
        </p>

        <p className="font-medium text-rose-800">
          I miss feeling like we were a team.
        </p>
      </>
    ),
  },

  {
    id: "no-pressure",
    number: "08",
    title: "Before The Last Card",
    subtitle: "Please read this part slowly.",
    buttonName: "Read This First",
    content: (
      <>
        <p>
          The next card has a question.
        </p>

        <p className="font-medium text-rose-800">
          Whatever you choose, I want it to be your real answer. ❤️
        </p>
      </>
    ),
  },

  {
    id: "one-last-question",
    number: "09",
    title: "One Honest Question",
    subtitle: "No arguments. No pressure. Just one conversation.",
    buttonName: "Open My Question",
    type: "meeting-form",
  },
];

const hearts = [
  { left: "5%", delay: "0s", size: "18px" },
  { left: "12%", delay: "3s", size: "28px" },
  { left: "20%", delay: "7s", size: "14px" },
  { left: "29%", delay: "2s", size: "20px" },
  { left: "41%", delay: "9s", size: "16px" },
  { left: "51%", delay: "5s", size: "30px" },
  { left: "62%", delay: "1s", size: "17px" },
  { left: "72%", delay: "8s", size: "24px" },
  { left: "81%", delay: "4s", size: "15px" },
  { left: "91%", delay: "6s", size: "26px" },
];

function createEventId(prefix = "event") {
  return `${prefix}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

async function saveContent(id, content) {
  const response = await fetch(CONTENT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      content,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.error || "Unable to save response");
  }

  return data;
}

function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((heart, index) => (
        <span
          key={index}
          className="floating-heart absolute text-rose-300/30"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            fontSize: heart.size,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

function DateVerification({ onVerified }) {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyDate = async (event) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(VERIFY_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError("Hmm... are you sure you remember our day? 🥺");
        return;
      }

      sessionStorage.setItem("love-date-verified", "true");

      await saveContent(
        createEventId("verification"),
        "DATE VERIFIED | She entered the correct date and opened the website"
      );

      onVerified();
    } catch (error) {
      console.error(error);

      setError("My heart is having a tiny technical problem 💔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
      <div className="w-full max-w-md">
        <div className="mb-7 text-center">
          <div className="mb-5 text-6xl heart-beat">♥</div>

          <p className="mb-2 text-sm font-medium tracking-[0.3em] text-rose-700 uppercase">
            For My Favourite Person
          </p>

          <h1 className="font-serif text-4xl leading-tight text-rose-950 sm:text-5xl">
            Before you enter
            <br />
            my heart...
          </h1>

          <p className="mt-5 text-rose-800/70">
            I have one tiny question for you.
          </p>
        </div>

        <form
          onSubmit={verifyDate}
          className="rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-2xl shadow-rose-950/20 backdrop-blur-xl"
        >
          <div className="mb-7 text-center">
            <span className="text-3xl">💌</span>

            <h2 className="mt-4 font-serif text-2xl text-rose-950">
              When did we become us?
            </h2>

            <p className="mt-2 text-sm text-rose-700/70">
              Pick the day our story officially began.
            </p>
          </div>

          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
            className="w-full rounded-2xl border border-rose-200 bg-rose-50/80 px-5 py-4 text-center text-lg text-rose-950 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-200/50"
          />

          {error && (
            <p className="mt-4 text-center text-sm text-rose-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full cursor-pointer rounded-2xl bg-rose-700 px-6 py-4 font-semibold text-white shadow-lg shadow-rose-700/30 transition hover:-translate-y-1 hover:bg-rose-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Checking my heart..." : "Open My Heart ♥"}
          </button>

          <p className="mt-5 text-center text-xs text-rose-700/50">
            Hint: the day everything quietly changed.
          </p>
        </form>
      </div>
    </main>
  );
}

function MeetingRequestForm() {
  const [answer, setAnswer] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submitResponse = async (event) => {
    event.preventDefault();

    if (!answer) {
      setError("Please choose the answer that feels honest to you.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const submittedAt = new Date().toISOString();

      const readableResponse = [
        "MEETING RESPONSE",
        "------------------------------",
        `Answer: ${answer}`,
        `Preferred Date: ${preferredDate || "Not provided"}`,
        `Preferred Time: ${preferredTime || "Not provided"}`,
        `Her Message: ${message.trim() || "No message provided"}`,
        `Submitted At: ${submittedAt}`,
      ].join("\n");

      await saveContent(
        createEventId("meeting-response"),
        readableResponse
      );

      setSubmitted(true);
    } catch (error) {
      console.error(error);

      setError("Your answer couldn't be saved. Please try once more.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    const saidYes = answer.startsWith("YES");
  
    if (saidYes) {
      return (
        <div className="relative flex min-h-[480px] flex-col items-center justify-center overflow-hidden py-8 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <span className="success-heart success-heart-1">♥</span>
            <span className="success-heart success-heart-2">♥</span>
            <span className="success-heart success-heart-3">♥</span>
            <span className="success-heart success-heart-4">♥</span>
            <span className="success-heart success-heart-5">♥</span>
          </div>
  
          <div className="relative z-10">
            <div className="yes-heart mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-100 text-5xl text-rose-600 shadow-xl shadow-rose-200/50">
              ♥
            </div>
  
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
              You Said Yes
            </p>
  
            <h3 className="mt-4 font-serif text-4xl leading-tight text-rose-950">
              Then I guess
              <br />
              I'll see you soon. ❤️
            </h3>
  
            <div className="mx-auto mt-7 max-w-sm rounded-[2rem] border border-rose-200 bg-white/60 px-6 py-7 shadow-lg shadow-rose-950/10 backdrop-blur">
              <p className="font-serif text-2xl leading-relaxed text-rose-950">
                I'll be in
                <span className="mx-2 font-semibold text-rose-700">
                  Bareilly
                </span>
                on the
                <span className="mx-2 font-semibold text-rose-700">
                  9th
                </span>
                ...
              </p>
  
              <p className="mt-5 font-serif text-3xl text-rose-800">
                See you soon!! ❤️
              </p>
            </div>
  
            <p className="mx-auto mt-7 max-w-xs leading-7 text-rose-900/65">
              And maybe, for a little while, we can just be
              <span className="font-medium text-rose-800">
                {" "}
                you and me again.
              </span>
            </p>
  
            <p className="mt-7 text-3xl heart-beat">
              ♥
            </p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="py-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-4xl text-rose-600">
          ♥
        </div>
  
        <h3 className="mt-6 font-serif text-3xl text-rose-950">
          I heard you.
        </h3>
  
        <p className="mt-5 leading-7 text-rose-900/70">
          Thank you for giving me an honest answer.
        </p>
  
        <p className="mt-4 leading-7 text-rose-900/70">
          I won't use this little website to argue with your choice.
        </p>
  
        <p className="mt-5 font-medium text-rose-800">
          I just wanted the courage to ask. ❤️
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submitResponse}>
      <p className="leading-7 text-rose-900/75">
        Would you meet me once?
      </p>

      <p className="mt-3 leading-7 text-rose-900/75">
        Not to force a decision. Not to restart an argument.
      </p>

      <p className="mt-3 leading-7 text-rose-900/75">
        Just one calm meeting. Somewhere comfortable. Where I can see you, hear
        you, and we can talk without a screen between us.
      </p>

      <p className="mt-4 font-medium text-rose-800">
        What does your heart honestly say?
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {[
          {
            value: "YES - I will meet you",
            label: "Yes",
            emoji: "❤️",
          },
          {
            value: "MAYBE - I need time",
            label: "Maybe",
            emoji: "🌙",
          },
          {
            value: "NO - I don't want to meet",
            label: "No",
            emoji: "🤍",
          },
        ].map((option) => {
          const selected = answer === option.value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setAnswer(option.value)}
              className={`rounded-2xl border px-2 py-4 text-sm font-medium transition ${
                selected
                  ? "border-rose-600 bg-rose-700 text-white shadow-lg shadow-rose-700/20"
                  : "border-rose-200 bg-white/70 text-rose-800 hover:bg-rose-50"
              }`}
            >
              <span className="mb-1 block text-xl">
                {option.emoji}
              </span>

              {option.label}
            </button>
          );
        })}
      </div>

      {(answer.startsWith("YES") ||
        answer.startsWith("MAYBE")) && (
        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-rose-800">
              A day that feels comfortable
            </label>

            <input
              type="date"
              value={preferredDate}
              onChange={(event) =>
                setPreferredDate(event.target.value)
              }
              className="w-full rounded-2xl border border-rose-200 bg-white/70 px-4 py-3 text-rose-950 outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-200/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-rose-800">
              What time would you prefer?
            </label>

            <select
              value={preferredTime}
              onChange={(event) =>
                setPreferredTime(event.target.value)
              }
              className="w-full rounded-2xl border border-rose-200 bg-white/70 px-4 py-3 text-rose-950 outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-200/40"
            >
              <option value="">Choose a time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
              <option value="You choose">You choose</option>
            </select>
          </div>
        </div>
      )}

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-rose-800">
          Anything you want to tell me?
        </label>

        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={3}
          placeholder="You can be completely honest here..."
          className="w-full resize-none rounded-2xl border border-rose-200 bg-white/70 px-4 py-3 text-rose-950 outline-none placeholder:text-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-200/40"
        />
      </div>

      {error && (
        <p className="mt-4 text-center text-sm text-rose-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-5 w-full cursor-pointer rounded-2xl bg-rose-700 px-5 py-4 font-semibold text-white shadow-lg shadow-rose-700/25 transition hover:-translate-y-1 hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting
          ? "Sending my answer..."
          : "This Is My Honest Answer ♥"}
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-rose-700/50">
        There is no wrong answer here.
      </p>
    </form>
  );
}

function CardDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState({});
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState("");

  const activeCard = cards[activeIndex];

  const logButtonClick = async (buttonName) => {
    await saveContent(
      createEventId("button-click"),
      `BUTTON CLICK | Button "${buttonName}" clicked`
    );
  };

  const revealCard = async () => {
    if (revealedCards[activeCard.id]) {
      return;
    }

    setError("");
    setLogging(true);

    try {
      await logButtonClick(activeCard.buttonName);

      setRevealedCards((current) => ({
        ...current,
        [activeCard.id]: true,
      }));
    } catch (error) {
      console.error(error);

      setError("This card does not want to open just yet 🥺");
    } finally {
      setLogging(false);
    }
  };

  const nextCard = () => {
    setError("");

    setActiveIndex((current) => {
      return (current + 1) % cards.length;
    });
  };

  const previousCard = () => {
    setError("");

    setActiveIndex((current) => {
      return (current - 1 + cards.length) % cards.length;
    });
  };

  const orderedCards = cards.map((_, offset) => {
    return cards[(activeIndex + offset) % cards.length];
  });

  return (
    <main className="relative z-10 min-h-screen px-5 py-10">
      <div className="mx-auto max-w-xl">
        <header className="mb-8 text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-rose-700 uppercase">
            A Little Piece Of My Heart
          </p>

          <h1 className="mt-3 font-serif text-4xl text-rose-950 sm:text-5xl">
            Cards made for you ♥
          </h1>

          <p className="mt-4 text-sm text-rose-800/60">
            {activeIndex + 1} of {cards.length} little pieces
          </p>
        </header>

        <div className="relative h-[720px] w-full sm:h-[670px]">
          {orderedCards.map((card, offset) => {
            const isActive = offset === 0;
            const isRevealed = Boolean(revealedCards[card.id]);

            return (
              <div
                key={card.id}
                className="absolute inset-x-0 top-0 mx-auto h-[650px] w-full max-w-md transition-all duration-500 sm:h-[600px]"
                style={{
                  zIndex: cards.length - offset,
                  transform: `
                    translateY(${offset * 10}px)
                    scale(${1 - offset * 0.028})
                    rotate(${offset % 2 === 0 ? offset : -offset}deg)
                  `,
                  opacity: Math.max(0.2, 1 - offset * 0.1),
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <div
                  className={`card-inner ${
                    isRevealed ? "card-revealed" : ""
                  }`}
                >
                  <section className="card-face overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-2xl shadow-rose-950/25 backdrop-blur-xl">
                    <div className="absolute right-6 top-5 font-serif text-7xl text-rose-100">
                      {card.number}
                    </div>

                    <div className="relative flex h-full flex-col p-8">
                      <span className="text-5xl text-rose-600">
                        ♥
                      </span>

                      <div className="my-auto">
                        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-rose-600 uppercase">
                          A card for you
                        </p>

                        <h2 className="font-serif text-4xl leading-tight text-rose-950">
                          {card.title}
                        </h2>

                        <p className="mt-5 leading-7 text-rose-800/65">
                          {card.subtitle}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={revealCard}
                        disabled={logging}
                        className="w-full cursor-pointer rounded-2xl bg-rose-700 px-5 py-4 font-semibold text-white shadow-lg shadow-rose-700/25 transition hover:-translate-y-1 hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {logging
                          ? "Opening this card..."
                          : `${card.buttonName} ♥`}
                      </button>

                      {error && (
                        <p className="mt-3 text-center text-sm text-rose-700">
                          {error}
                        </p>
                      )}
                    </div>
                  </section>

                  <section className="card-face card-back overflow-hidden rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-pink-100 shadow-2xl shadow-rose-950/25">
                    <div className="flex h-full flex-col p-7 sm:p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl text-rose-600">
                          ♥
                        </span>

                        <span className="text-xs font-semibold tracking-[0.25em] text-rose-500 uppercase">
                          {card.number} /{" "}
                          {String(cards.length).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="meeting-scroll my-5 flex-1 overflow-y-auto pr-1">
                        <h2 className="font-serif text-3xl text-rose-950">
                          {card.title}
                        </h2>

                        <div className="mt-6 space-y-4 leading-7 text-rose-900/75">
                          {card.type === "meeting-form" ? (
                            <MeetingRequestForm />
                          ) : (
                            card.content
                          )}
                        </div>
                      </div>

                      {card.type !== "meeting-form" && (
                        <button
                          type="button"
                          onClick={nextCard}
                          className="w-full cursor-pointer rounded-2xl border border-rose-300 bg-white/70 px-5 py-4 font-semibold text-rose-800 transition hover:-translate-y-1 hover:bg-white"
                        >
                          {activeIndex === cards.length - 1
                            ? "Read Them Again ♥"
                            : "Next Card →"}
                        </button>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={previousCard}
            className="cursor-pointer text-sm font-medium text-rose-700/70 transition hover:text-rose-950"
          >
            ← Previous
          </button>

          <div className="flex max-w-[180px] gap-1.5">
            {cards.map((card, index) => (
              <span
                key={card.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-rose-700"
                    : "w-2 bg-rose-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextCard}
            className="cursor-pointer text-sm font-medium text-rose-700/70 transition hover:text-rose-950"
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}

function App() {
  const [verified, setVerified] = useState(() => {
    return (
      sessionStorage.getItem("love-date-verified") === "true"
    );
  });

  return (
    <div className="love-app min-h-screen overflow-hidden">
      <FloatingHearts />

      {verified ? (
        <CardDeck />
      ) : (
        <DateVerification
          onVerified={() => setVerified(true)}
        />
      )}

      <style>{`
        .love-app {
          background:
            radial-gradient(
              circle at 20% 10%,
              rgba(255, 228, 230, 0.95),
              transparent 35%
            ),
            radial-gradient(
              circle at 80% 85%,
              rgba(253, 164, 175, 0.35),
              transparent 40%
            ),
            linear-gradient(
              145deg,
              #fff1f2 0%,
              #ffe4e6 40%,
              #fecdd3 100%
            );
        }

        .floating-heart {
          bottom: -50px;
          animation: float-heart 16s linear infinite;
        }

        @keyframes float-heart {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 0.6;
          }

          100% {
            transform: translateY(-115vh) rotate(360deg);
            opacity: 0;
          }
        }

        .heart-beat {
          color: #be123c;
          animation: heart-beat 1.4s ease-in-out infinite;
        }

        @keyframes heart-beat {
          0%,
          100% {
            transform: scale(1);
          }

          15% {
            transform: scale(1.18);
          }

          30% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.12);
          }

          60% {
            transform: scale(1);
          }
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition:
            transform 800ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .card-inner.card-revealed {
          transform: rotateY(180deg);
        }

        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .card-back {
          transform: rotateY(180deg);
        }

        .meeting-scroll {
          scrollbar-width: thin;
          scrollbar-color:
            rgba(190, 18, 60, 0.25)
            transparent;
        }

        .meeting-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .meeting-scroll::-webkit-scrollbar-thumb {
          background: rgba(190, 18, 60, 0.25);
          border-radius: 999px;
        }

        .yes-heart {
  animation: yes-heart-beat 1.2s ease-in-out infinite;
}

@keyframes yes-heart-beat {
  0%,
  100% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.1);
  }

  60% {
    transform: scale(1);
  }
}

.success-heart {
  position: absolute;
  color: rgba(244, 63, 94, 0.18);
  animation: success-heart-float 6s ease-in-out infinite;
}

.success-heart-1 {
  left: 5%;
  top: 10%;
  font-size: 28px;
  animation-delay: 0s;
}

.success-heart-2 {
  right: 8%;
  top: 18%;
  font-size: 20px;
  animation-delay: 1s;
}

.success-heart-3 {
  left: 12%;
  bottom: 15%;
  font-size: 18px;
  animation-delay: 2s;
}

.success-heart-4 {
  right: 12%;
  bottom: 10%;
  font-size: 32px;
  animation-delay: 0.5s;
}

.success-heart-5 {
  left: 48%;
  top: 3%;
  font-size: 16px;
  animation-delay: 1.5s;
}

@keyframes success-heart-float {
  0%,
  100% {
    transform: translateY(0) rotate(-8deg);
  }

  50% {
    transform: translateY(-18px) rotate(8deg);
  }
}
      `}</style>
    </div>
  );
}

export default App;