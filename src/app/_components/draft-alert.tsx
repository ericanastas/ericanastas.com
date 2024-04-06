import Container from "@/app/_components/container";
import cn from "classnames";

const DraftAlert = () => {
  return (
    <div className={cn("border-b bg-amber-200 border-neutral-200")}>
      <Container>
        <div className="py-2 text-center text-xl txt-bold">DRAFT</div>
      </Container>
    </div>
  );
};

export default DraftAlert;
