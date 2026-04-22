import {
  Play,
  ExternalLink,
  Newspaper,
  Video,
  Quote,
} from "lucide-react";
import hydroOneArticleImage from "/hydro-one-article.png";
<img
  src="/hydro-one-article.png"
  alt="Salan Bhattarai featured in Hydro One co-op article"
/>
const YORK_ARTICLE_URL =
  "https://lassonde.yorku.ca/lassonde-in-the-media";

const BRAMPTON_ARTICLE_URL =
  "https://www.bramptonguardian.com/sponsored-sections/co-op-experience-helps-brampton-student-focus-on-future-career-direction/article_e309c7ac-88fe-5ab4-b508-10fa529dd302.html";

const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=I1SexRh_4RY";
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/I1SexRh_4RY";

export default function FeaturedMedia() {
  return (
    <section
      id="featured-media"
      className="w-full bg-[#f7f7f7] py-20 px-6 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Media & Recognition
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Featured stories, interviews, and career highlights
          </h2>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-8 text-neutral-600">
            A collection of media features that highlight my journey in computer
            engineering, co-op experience at Hydro One, and the impact of
            building technical skills through real-world work and university
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center mb-12">
          <div className="rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-neutral-200">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <Quote size={28} />
            </div>

            <blockquote className="text-2xl md:text-3xl leading-relaxed font-medium text-neutral-900">
              “At Hydro One, I have been able to apply my technical skills
              learned throughout university to make a tangible impact in the
              energy sector.”
            </blockquote>

            <p className="mt-6 text-lg leading-8 text-neutral-700">
              Joining a professional environment strengthened both my technical
              foundation and my communication, teamwork, and problem-solving
              skills. The experience helped shape my career direction and gave
              me a stronger sense of how engineering can create real impact.
            </p>

            <p className="mt-8 text-base md:text-lg font-medium text-neutral-900">
              — Salan Bhattarai
            </p>
            <p className="text-sm md:text-base text-neutral-600">
              Computer Engineering Student, Lassonde School of Engineering
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-neutral-200">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={YOUTUBE_EMBED_URL}
                title="Salan Bhattarai featured video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-red-600">
                <Video size={16} />
                Featured Video
              </div>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                York University Co-op Feature
              </h3>
              <p className="mt-2 text-neutral-600 leading-7">
                A video spotlight on my co-op experience, growth as an
                engineering student, and the value of applying classroom
                knowledge in industry.
              </p>
              <a
                href={YOUTUBE_VIDEO_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Play size={16} />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={BRAMPTON_ARTICLE_URL}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-neutral-200 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src={hydroOneArticleImage}
                alt="Salan Bhattarai featured in Hydro One co-op article"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-7">
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                  <Newspaper size={22} />
                </div>
                <ExternalLink
                  size={18}
                  className="text-neutral-400 transition group-hover:text-neutral-900"
                />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Featured Article
              </p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-neutral-900">
                Co-op experience helps Brampton student focus on future career
                direction
              </h3>
              <p className="mt-4 text-neutral-600 leading-7">
                A media feature highlighting my co-op journey, technical growth,
                and experience applying engineering skills in the energy sector
                at Hydro One.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                Read article
                <ExternalLink size={16} />
              </div>
            </div>
          </a>

          <a
            href={YORK_ARTICLE_URL}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl bg-white p-7 shadow-sm border border-neutral-200 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-800">
                <Newspaper size={22} />
              </div>
              <ExternalLink
                size={18}
                className="text-neutral-400 transition group-hover:text-neutral-900"
              />
            </div>

            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
              York University
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-neutral-900">
              Media coverage and university recognition
            </h3>
            <p className="mt-4 text-neutral-600 leading-7">
              Explore additional university media coverage and recognition
              connected to my academic and professional journey.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
              Visit page
              <ExternalLink size={16} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}