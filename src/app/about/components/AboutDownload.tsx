export default function AboutDownload() {
  return (
    <section>
      <div className="container text-center">
        {/* <div className="bg-simple-bg rounded-2xl p-12 border border-border"> */}
        <div className="bg-simple-bg rounded-2xl pt-12 pb-12 mb-10 border border-border">
          <h2 className="mb-4">Learn More About VLocker</h2>
          <p className="text-lightblue mb-8 max-w-xl mx-auto">
            Download our brochure to understand how VLocker helps simplify loan
            management and device security.
          </p>

          {/* <button className="bg-linear-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition"> */}
          <button className="bg-linear-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-medium hover:from-secondary hover:to-primary hover:bg-liner-to-l  cursor-pointer">
            {/* <button className="flex w-full items-center justify-center gap-2.5 rounded-lg p-3.5 text-white bg-linear-to-r from-primary/60 to-secondary/60 hover:from-primary hover:to-secondary hover:bg-slateGray cursor-pointer"> */}
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
}
