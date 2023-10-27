export namespace Types {
  type Activity = {
    name: string;
    setsAmount: number;
    repsAmount: number;
    restSeconds: number;
  };

  type User = {
    email: string;
    username: string;
    schedule: {
      sunday?: Activity[];
      monday?: Activity[];
      tuesday?: Activity[];
      wednesday?: Activity[];
      thursday?: Activity[];
      friday?: Activity[];
      saturday?: Activity[];
    };
    workouts: [{ date: Date; activies: Activity[]; completion: number }];
    verified: boolean;
    verificationCode: string;
    authentication: { salt?: string; password?: string; sessionToken?: string };
  };
}
