using AutoMapper;
using Domain;

namespace Application.Activities
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Activity, ActivityDto>();
            CreateMap<UserActivity, AttendeeDto>()
                .ForMember(dest => dest.Username, o => o.MapFrom(source => source.AppUser.UserName))
                .ForMember(dest => dest.DisplayName, o => o.MapFrom(source => source.AppUser.DisplayName));
        }
    }
}