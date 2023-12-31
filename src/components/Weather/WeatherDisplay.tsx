import { Group } from "@mantine/core";
import { WeatherProps } from "../../utilities/types";
import { useGroupStyles } from "../../styles/group.styles";
import { DBox, DGroup } from "../ui";
import { Temperature } from "./Components/Temperature";
import { Humidity } from "./Components/Humidity";
import { WeatherIcon } from "./Components/WeatherIcon";
import { WindSpeed } from "./Components/WindSpeed";

export const WeatherDisplay = ({ data }: { data: WeatherProps }) => {
  const { classes } = useGroupStyles();
  return (
    <DBox>
      <DGroup>
        <Group>
          <Temperature temperature={data.temp} />

          <Group className={classes.weatherGroup}>
            <Humidity humidity={data.humidity} />
            <WindSpeed windSpeed={data.windSpeed} />
          </Group>
        </Group>

        <WeatherIcon weatherStatus={data.weather} />
      </DGroup>
    </DBox>
  );
};
