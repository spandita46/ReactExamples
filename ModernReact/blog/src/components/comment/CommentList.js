import React from "react";
import Comment from "./Comment";
import ApprovalCard from "../approval/ApprovalCard";
import Faker from "faker";

const CommentList = props => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author={Faker.fake("{{name.lastName}}, {{name.firstName}}")}
          imgSrc={Faker.image.avatar()}
          time={Faker.date.past().toLocaleTimeString()}
          text={Faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author={Faker.fake("{{name.lastName}}, {{name.firstName}}")}
          imgSrc={Faker.image.avatar()}
          time={Faker.date.past().toLocaleTimeString()}
          text={Faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author={Faker.fake("{{name.lastName}}, {{name.firstName}}")}
          imgSrc={Faker.image.avatar()}
          time={Faker.date.past().toLocaleTimeString()}
          text={Faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author={Faker.fake("{{name.lastName}}, {{name.firstName}}")}
          imgSrc={Faker.image.avatar()}
          time={Faker.date.past().toLocaleTimeString()}
          text={Faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author={Faker.fake("{{name.lastName}}, {{name.firstName}}")}
          imgSrc={Faker.image.avatar()}
          time={Faker.date.past().toLocaleTimeString()}
          text={Faker.random.words()}
        />
      </ApprovalCard>
    </div>
  );
};

export default CommentList;
