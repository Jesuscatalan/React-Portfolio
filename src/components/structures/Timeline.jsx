import { TimelineConnector,
    TimelineRoot,
    TimelineContent,
    TimelineItem,
    TimelineTitle
} from "../ui/timeline";
import { VStack } from "@chakra-ui/react";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserShield, FaStore, FaUtensils, FaLaptopCode } from "react-icons/fa";

export const Timeline = () => {
    return (
        <VStack pt={5}>
        <TimelineRoot size="lg" hideBelow="md">
            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">September 2017</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <GiGraduateCap />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Started working at Dicks Sporting Goods
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">March 2020</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaUserShield />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Joined NC Highway Patrol
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">September 2020</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaStore />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Went back to Dicks Sporting Goods as Manager 
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">May 2023</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaUtensils />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Manager at El Valle Mexican Restaurant
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineContent width="auto">
                    <TimelineTitle whiteSpace="nowrap">October 2024</TimelineTitle>
                </TimelineContent>
                <TimelineConnector>
                    <FaLaptopCode />
                </TimelineConnector>
                <TimelineContent>
                    <TimelineTitle>
                        Joined UNC Charlotte coding bootcamp
                    </TimelineTitle>
                </TimelineContent>
            </TimelineItem>

        </TimelineRoot>
        </VStack>
    );
};
