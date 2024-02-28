import {Layout} from "@/components/layouts";
import { Faq } from "@/interface";
import {getFaqs} from "@/services/getFaqs";
import {GetStaticProps, NextPage} from "next";

interface FaqPageProps {
  faqs: Faq[];
}

const FaqsPage: NextPage<FaqPageProps> = ({faqs}) => {
	return (
		<Layout
			title="Preguntas Frecuentes"
			description="Pagina de preguntas frecuentes"
		>
			<section>
				<h1 className="text-3xl font-bold my-6">FAQs</h1>
				<div className="grid grid-cols-1 gap-4">
					{faqs.map((faq) => (
						<div key={faq.id} className="bg-slate-950/45 rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
						</div>
					))}
				</div>
			</section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const faqs = await getFaqs();

	return {
		props: {
			// faqs,
			// faqs: []
		},
	};
};

export default FaqsPage;
