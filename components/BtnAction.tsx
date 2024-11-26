interface BtnProps {
  caption: string;
  styles: string;
}

const BtnAction = ({ caption, styles }: BtnProps) => {
  return (
    <div className="flex justify-center items-center">

        <div className={`${styles} border border-text-primary px-4 py-2 md:px-8 md:py-4 rounded-2xl`}>
          <p className="text-center text-xl md:text-2xl font-garet text-primary">
            {caption}
          </p>
        </div>
      
    </div>
  );
};

export default BtnAction;