import Container from "@/app/_components/container";
import cn from "classnames";

const DraftAlert = () => {
  return (
    <div className={cn("border-b bg-amber-100 border-neutral-200")}>
      <Container>
        <div className="py-2 text-center text-sm">
          <>This page is a draft.</>
        </div>
      </Container>
    </div>
  );
};

export default DraftAlert;
