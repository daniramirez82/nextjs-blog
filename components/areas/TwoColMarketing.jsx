import CtaSubmit from "../ui/CtaSubmit";

const TwoColMarketing = () => {
  return (
    <div className="container flex flex-col md:flex-row">
      <div className="md:basis-1/2">
        <img className="object-cover min-h-full min-w-full" src="img/aws-amazon.jpeg" alt="amazon marketing" />
      </div>
      <div className="md:basis-1/2 bg-[#232F3F] px-16 py-4">
        <h3 className="text-white font-bold pt-8 text-3xl"> Subcribe with us!</h3>
       <p className="text-slate-200 pt-4 pr-8">You´ll recibe a hole resume of all the most important new with out any kind of spam.</p>
        <CtaSubmit/>
      </div>
    </div>
  );
};

export default TwoColMarketing;
