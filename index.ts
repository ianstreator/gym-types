export namespace Types {
  export type Activity = {
    name: string;
    setsAmount: number;
    repsAmount: number;
    restSeconds: number;
  };
  export type Workout = {
    date: Date;
    _id: string;
    completion: number;
    activies?: Activity[];
  };

  export type User = {
    email: string;
    setEmail?: (userEmail: string) => void;
    username: string;
    setUsername?: (name: string) => void;
    schedule: {
      sunday: Activity[];
      monday: Activity[];
      tuesday: Activity[];
      wednesday: Activity[];
      thursday: Activity[];
      friday: Activity[];
      saturday: Activity[];
    };
    setSchedule?: (day: string, activities: Activity[]) => void;
    workouts?: Workout[];
    setWorkouts?: ({
      date,
      activities,
      completion,
    }: {
      date: Date;
      activities: Activity[];
      completion: number;
    }) => void;
    verified?: boolean;
    verificationCode?: string;
    _id: string;
    setId?: (id: string) => void;
    authentication?: {
      salt?: string;
      password?: string;
      sessionToken?: string;
    };
    setState?: (userFields: User) => void;
  };
}
