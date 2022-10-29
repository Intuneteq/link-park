import { useContext } from "react";
import AppContext from "../../../Context/AppProvider";
import { Card, Grid, Text, Link, Progress } from "@nextui-org/react";

const Subjects = () => {
  const { userProfile } = useContext(AppContext);

  const allSubjects = [
    {
      img: "",
      subjectTitle: "Mathematics",
      subjectTeacher: "Mrs Olanitori",
      subjectDetails: "",
      subjectProgress: 75,
      aboutSubject:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius ipsam sit, possimus blanditiis voluptatum similique non deserunt autem. Aliquam.",
      subjectTextBooks: ["New General Mathematics"],
    },
    {
      img: "",
      subjectTitle: "English",
      subjectTeacher: "Mrs Omotosho",
      subjectDetails: "",
      subjectProgress: 50,
      aboutSubject:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius ipsam sit, possimus blanditiis voluptatum similique non deserunt autem. Aliquam.",
      subjectTextBooks: ["English Textbook"],
    },
    {
      img: "",
      subjectTitle: "Yoruba",
      subjectTeacher: "Mr BabaJide",
      subjectDetails: "",
      subjectProgress: 90,
      aboutSubject:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius ipsam sit, possimus blanditiis voluptatum similique non deserunt autem. Aliquam.",
      subjectTextBooks: ["Yoruba Textbook", "Yoruba Textbook 2"],
    },
    {
      img: "",
      subjectTitle: "Physics",
      subjectTeacher: "Mr Olorunsogo",
      subjectDetails: "",
      subjectProgress: 20,
      aboutSubject:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eius ipsam sit, possimus blanditiis voluptatum similique non deserunt autem. Aliquam.",
      subjectTextBooks: ["Physics Textbook"],
    },
  ];

  return (
    <div>
      <h1 className="head-text">My Library</h1>
      {userProfile ? (
        <Grid.Container gap={2} justify="flex-start">
          {allSubjects.map((item, index) => (
            <Grid key={index}>
              <Card css={{ p: "$6", mw: "360px" }}>
                <Card.Header>
                  <Text className="p-text">{item.subjectTitle}</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$2", my: "$5" }}>
                  <Card.Image
                    src={"https://nextui.org/images/fruit-6.jpeg"}
                    objectFit="cover"
                    width="100%"
                    height={140}
                    alt={item.subjectTitle}
                  />
                  <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Text style={{ marginBottom: "20px" }}>
                      {item.aboutSubject}
                    </Text>
                    <section>
                      <h5>
                        <span className="p-text">Subject Teacher:</span>{" "}
                        {item.subjectTeacher}
                      </h5>
                      <h5>
                        <span className="p-text">Subject Textbook(s): </span>
                        {item.subjectTextBooks.map(
                          (textbook) => `${textbook}, `
                        )}
                      </h5>
                    </section>
                  </div>
                  <Progress color="primary" value={item.subjectProgress} />
                </Card.Body>
                <Card.Divider />
                <Card.Footer>
                  <Link
                    icon
                    color="primary"
                    target="_blank"
                    href="https://github.com/nextui-org/nextui"
                  >
                    View Subject
                  </Link>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      ) : (
        <p>nothing yet</p>
      )}
    </div>
  );
};

export default Subjects;
